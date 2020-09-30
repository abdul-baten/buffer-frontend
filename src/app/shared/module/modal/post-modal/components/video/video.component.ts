import { AppState } from 'src/app/reducers';
import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { finalize, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION, I_MEDIA, I_POST } from '@core/model';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { selectNewPostMedias } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--video',
  styleUrls: ['./video.component.scss'],
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit, OnDestroy {
  @Output() tabSelected = new EventEmitter<number>();
  currentDateTime: Date;
  menuItems: MenuItem[];
  postStatus = E_POST_STATUS;
  postType = E_POST_TYPE;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];
  videoForm: FormGroup;

  constructor(private readonly facade: PostModalFacade, private readonly formBuilder: FormBuilder, private readonly store: Store<AppState>) {
    this.videoForm = this.buildVideoForm();
  }

  ngOnInit(): void {
    this.menuItems = [
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

    this.subscriptions$.add(
      this.facade.getPostInfo().subscribe((postInfo: I_POST) => {
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

  changeConnectionSelection(connections: Partial<I_CONNECTION>[]): void {
    this.selectedConnections = connections;
  }

  previous(): void {
    this.tabSelected.emit(0);
  }

  isButtonDisabled(): Observable<boolean> {
    return this.store.select(selectNewPostMedias).pipe(
      map((medias: I_MEDIA[]) => {
        return !!!medias.length || !!!this.selectedConnections.length || this.videoForm.invalid;
      }),
    );
  }

  savePost(postStatus: E_POST_STATUS): void {
    if (this.videoForm.valid) {
      const { value } = this.videoForm;
      this.subscriptions$.add(
        this.facade
          .sendPost(E_POST_TYPE.VIDEO, value, postStatus, this.selectedConnections)
          .pipe(finalize(() => this.videoForm.controls.postCaption.reset()))
          .subscribe(),
      );
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
