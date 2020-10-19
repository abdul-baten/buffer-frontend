import {
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { EPostStatus, EPostType } from 'src/app/core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noop, Observable, of, Subscription } from 'rxjs';

import { IConnection } from 'src/app/core/model';
import { MenuItem } from 'primeng/api/menuitem';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  selector: 'buffer-image',
  styleUrls: ['./image.component.css'],
  templateUrl: './image.component.html'
})
export class ImageComponent implements OnInit, OnDestroy {
  @Output() tab_selected = new EventEmitter<number>();
  public current_date_time: Date = new Date();
  public form: FormGroup;
  public menu_items: MenuItem[] = [];
  public post_status = EPostStatus;
  public post_type = EPostType;
  private subscriptions$ = new Subscription();
  public selected_connections: Partial<IConnection>[] = [];

  constructor (private readonly facade: PostModalFacade, private formBuilder: FormBuilder) {
    this.form = this.biuldImageForm();
  }

  private biuldImageForm (): FormGroup {
    return this.formBuilder.group({
      post_date_time: [null, Validators.required],
      post_message: [null, Validators.required]
    });
  }

  ngOnInit (): void {
    this.menu_items = [
      {
        command: () => {
          this.savePost(this.post_status.SCHEDULED);
        },
        icon: 'pi pi-calendar-plus',
        label: 'Schedule'
      },
      { separator: true },
      { command: () => {
        this.savePost(this.post_status.SAVED);
      },
      icon: 'pi pi-save',
      label: 'Save post'

      }
    ];

    /*
     * This.subscriptions$.add(this.facade.getPostInfo().subscribe((postInfo: IPost) => {
     *   const { post_message, post_date_time } = postInfo;
     */

    /*
     *   If (post_message) {
     *     this.form.patchValue({ post_message });
     *   }
     *   this.form.patchValue({ post_date_time: new Date(post_date_time) });
     * }));
     */
  }

  previous (): void {
    this.tab_selected.emit(0);
  }

  changeConnectionSelection (connections: Partial<IConnection>[]): void {
    this.selected_connections = connections;
  }

  isButtonDisabled (): Observable<boolean> {
    // Return this.store.select(selectNewPostMedias).pipe(map((medias: IMedia[]) => Boolean(!medias.length) || Boolean(!this.selected_connections.length) || this.form.invalid));

    return of(Boolean(!this.selected_connections.length) || this.form.invalid);
  }

  savePost (post_status: EPostStatus): void {
    if (this.form.valid) {
      const { value } = this.form;

      this.subscriptions$.add(this.facade.sendPost(EPostType.IMAGE, value, post_status, this.selected_connections).subscribe(noop));
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }
  }
}
