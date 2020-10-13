import { AppState } from 'src/app/reducers';
import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { defaultIfEmpty, finalize, map } from 'rxjs/operators';
import { EPostStatus, EPostType } from 'src/app/core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConnection, I_MEDIA, IPost } from 'src/app/core/model';
import { MenuItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { selectNewPostMedias } from 'src/app/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buffer-video',
  styleUrls: ['./video.component.css'],
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit, OnDestroy {
  @Output() tabSelected = new EventEmitter<number>();
  currentDateTime: Date = new Date();
  menu_items: MenuItem[] = [];
  postStatus = EPostStatus;
  postType = EPostType;
  private subscription$ = new Subscription();
  selectedConnections: Partial<IConnection>[] = [];
  videoForm: FormGroup;

  constructor(private readonly facade: PostModalFacade, private readonly formBuilder: FormBuilder, private readonly store: Store<AppState>) {
    this.videoForm = this.buildVideoForm();
  }

  ngOnInit(): void {
    this.menu_items = [
      {
        label: 'Schedule',
        icon: 'pi pi-calendar-plus',
        command: () => {
          this.savePost(this.postStatus.SCHEDULED);
        },
      },
      { separator: true },
      {
        label: 'Save post',
        icon: 'pi pi-save',
        command: () => {
          this.savePost(this.postStatus.SAVED);
        },
      },
    ];

    this.subscription$.add(
      this.facade.getPostInfo().subscribe((postInfo: IPost) => {
        const { postCaption, postScheduleDateTime } = postInfo;
        if (!!postCaption) {
          this.videoForm.patchValue({ postCaption });
        }
        this.videoForm.patchValue({ postScheduleDateTime: new Date(postScheduleDateTime) });
      }),
    );
  }

  private buildVideoForm(): FormGroup {
    return this.formBuilder.group({
      postScheduleDateTime: [null, Validators.required],
      postCaption: [null, Validators.required],
    });
  }

  changeConnectionSelection(connections: Partial<IConnection>[]): void {
    this.selectedConnections = connections;
  }

  previous(): void {
    this.tabSelected.emit(0);
  }

  isButtonDisabled(): Observable<boolean> {
    return this.store.select(selectNewPostMedias).pipe(
      map((medias: I_MEDIA[]) => !!!medias.length || !!!this.selectedConnections.length || this.videoForm.invalid),
      map((response: boolean) => response),
      defaultIfEmpty(true),
    );
  }

  savePost(postStatus: EPostStatus): void {
    if (this.videoForm.valid) {
      const { value } = this.videoForm;
      this.subscription$.add(
        this.facade
          .sendPost(EPostType.VIDEO, value, postStatus, this.selectedConnections)
          .pipe(finalize(() => this.videoForm.controls.postCaption.reset()))
          .subscribe(),
      );
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
