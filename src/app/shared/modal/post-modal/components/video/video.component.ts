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
import { finalize, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConnection, IPost } from 'src/app/core/model';
import { MenuItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  selector: 'buffer-video',
  styleUrls: ['./video.component.css'],
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit, OnDestroy {
  @Output() tab_selected = new EventEmitter<number>();
  private subscriptions$ = new Subscription();
  public current_date_time: Date = new Date();
  public file_pond_options = {};
  public form: FormGroup;
  public menu_items: MenuItem[] = [];
  public post_status = EPostStatus;
  public post_type = EPostType;
  public selected_connections: Partial<IConnection>[] = [];

  constructor (
    private readonly dialogRef: DynamicDialogRef,
    private readonly facade: PostModalFacade,
    private readonly formBuilder: FormBuilder
  ) {
    this.file_pond_options = {
      acceptedFileTypes: ['video/mp4'],
      labelIdle: '<p><span class="filepond--label-action">Upload a video</span> or drag and drop here</p>',
      maxFileSize: '150MB',
      maxFiles: 1,
      mediaPreviewHeight: 100
    };
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
    this.form = this.buildVideoForm();
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

  private buildVideoForm (): FormGroup {
    return this.formBuilder.group({
      post_date_time: [null, Validators.required],
      post_message: [null, Validators.required]
    });
  }

  public changeConnectionSelection (connections: Partial<IConnection>[]): void {
    this.selected_connections = connections;
  }

  public previous (): void {
    this.tab_selected.emit(0);
  }

  public isButtonDisabled (): Observable<boolean> {
    return this.facade.getComposeInfo().pipe(map((post_info: IPost) => !post_info.post_media || !this.selected_connections.length || this.form.invalid));
  }

  public savePost (post_status: EPostStatus): void {
    if (this.form.valid) {
      const { value } = this.form;

      this.subscriptions$.add(this.facade.
        sendPost(EPostType.VIDEO, value, post_status, this.selected_connections).
        pipe(finalize(() => this.dialogRef.destroy())).
        subscribe((compose_id: string) => this.facade.removeComposeInfo(compose_id)));
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }
  }
}
