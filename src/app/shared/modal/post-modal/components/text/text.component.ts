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
import { IConnection } from 'src/app/core/model';
import { MenuItem } from 'primeng/api/menuitem';
import { noop, Subscription } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  selector: 'buffer-text',
  styleUrls: ['./text.component.css'],
  templateUrl: './text.component.html'
})
export class TextComponent implements OnInit, OnDestroy {
  @Output() tab_selected = new EventEmitter<number>();
  private subscriptions$ = new Subscription();
  public current_date_time: Date = new Date();
  public form: FormGroup;
  public menu_items: MenuItem[] = [];
  public post_status = EPostStatus;
  public post_type = EPostType;
  public selected_connections: Partial<IConnection>[] = [];

  constructor (private readonly formBuilder: FormBuilder, private readonly facade: PostModalFacade) {
    this.form = this.buildTextForm();
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
     * This.subscriptions$.add(
     *   this.facade.getPostInfo().subscribe((postInfo: IPost) => {
     *     const { post_message, post_date_time } = postInfo;
     *     if (!!post_message) {
     *       this.form.patchValue({ post_message });
     *     }
     *     this.form.patchValue({ post_date_time: new Date(post_date_time) });
     *   }),
     * );
     */
  }

  private buildTextForm (): FormGroup {
    return this.formBuilder.group({
      post_date_time: [null, Validators.required],
      post_message: [null, Validators.required]
    });
  }

  previous (): void {
    this.tab_selected.emit(0);
  }

  changeConnectionSelection (connections: Partial<IConnection>[]): void {
    this.selected_connections = connections;
  }

  isButtonDisabled (): boolean {
    return this.form.invalid || Boolean(!this.selected_connections.length);
  }

  savePost (post_status: EPostStatus): void {
    if (this.form.valid) {
      const { value } = this.form;

      this.subscriptions$.add(this.facade.sendPost(EPostType.TEXT, value, post_status, this.selected_connections).subscribe(noop));
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }
  }
}
