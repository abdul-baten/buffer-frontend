import {
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { EPostStatus, EPostType } from 'src/app/core/enum';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';

import { IConnection } from 'src/app/core/model';
import { MenuItem } from 'primeng/api';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  selector: 'buffer-video',
  styleUrls: ['./video.component.css'],
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit, OnDestroy {
  @Output() tab_selected = new EventEmitter<number>();
  private subscription$ = new Subscription();
  public current_date_time: Date = new Date();
  public form: FormGroup;
  public menu_items: MenuItem[] = [];
  public post_status = EPostStatus;
  public post_type = EPostType;
  public selected_connections: Partial<IConnection>[] = [];

  constructor (private readonly facade: PostModalFacade, private readonly formBuilder: FormBuilder) {
    this.form = this.buildVideoForm();
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
      {
        command: () => {
          this.savePost(this.post_status.SAVED);
        },
        icon: 'pi pi-save',
        label: 'Save post'
      }
    ];

    /*
     * This.subscription$.add(this.facade.getPostInfo().subscribe((post_info: IPost) => {
     *   const { post_message, post_date_time } = post_info;
     */

    /*
     *   If (post_message) {
     *     this.form.patchValue({ post_message });
     *   }
     *   this.form.patchValue({ post_date_time: new Date(post_date_time) });
     * }));
     */
  }

  private buildVideoForm (): FormGroup {
    return this.formBuilder.group({
      post_date_time: [null, Validators.required],
      post_message: [null, Validators.required]
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  changeConnectionSelection (connections: any): void {
    this.selected_connections = connections;
  }

  previous (): void {
    this.tab_selected.emit(0);
  }

  isButtonDisabled (): Observable<boolean> {
    // Return of(Boolean(!medias.length) || Boolean(!this.selected_connections.length) || this.form.invalid)
    return of(Boolean(!this.selected_connections.length) || this.form.invalid);
  }

  savePost (post_status: EPostStatus): void {
    if (this.form.valid) {
      const { value } = this.form;

      this.subscription$.add(this.facade.
        sendPost(EPostType.VIDEO, value, post_status, this.selected_connections).
        pipe(finalize(() => this.form.controls.postCaption.reset())).
        subscribe());
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
