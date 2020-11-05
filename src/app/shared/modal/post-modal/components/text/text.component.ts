import {
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EPostStatus, EPostType } from 'src/app/core/enum';
import { finalize, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConnection, IPost } from 'src/app/core/model';
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
  public current_date_time = new Date();
  public form: FormGroup;
  public menu_items: MenuItem[];
  public post_status = EPostStatus;
  public post_type = EPostType;
  public selected_connections: Partial<IConnection>[] = [];

  constructor (
    private readonly dialogRef: DynamicDialogRef,
    private readonly facade: PostModalFacade,
    private readonly formBuilder: FormBuilder
  ) {
    this.form = this.buildTextForm();
    this.menu_items = [
      {
        command: () => {
          this.savePost(this.post_status.SCHEDULE);
        },
        icon: 'ico-md ico-hour-glass',
        label: 'Schedule'
      },
      { separator: true },
      {
        command: () => {
          this.savePost(this.post_status.DRAFT);
        },
        icon: 'ico-md ico-save',
        label: 'Save draft'
      }
    ];
  }

  ngOnInit (): void {
    const post_compose_info$ = this.facade.getComposeInfo();

    this.subscriptions$.add(post_compose_info$.subscribe((post_info: IPost) => {
      if (post_info) {
        const { post_message, post_date_time } = post_info;

        this.form.patchValue({
          post_date_time: post_date_time ? new Date(post_date_time) : new Date(),
          post_message: post_message ?? ''
        });
      }
    }));
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

  public isButtonDisabled (): boolean {
    return this.form.invalid || !this.selected_connections.length;
  }

  public savePost (post_status: EPostStatus): void {
    if (this.form.valid) {
      const { value } = this.form;

      this.subscriptions$.add(this.facade.sendPost(EPostType.TEXT, value, post_status, this.selected_connections).
        pipe(
          tap((compose_id: string) => this.facade.removeComposeInfo(compose_id)),
          finalize(() => {
            this.dialogRef.destroy();
          })
        ).
        subscribe(noop));
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }

    if (this.facade.subscriptions$) {
      this.facade.subscriptions$.unsubscribe();
    }
  }
}
