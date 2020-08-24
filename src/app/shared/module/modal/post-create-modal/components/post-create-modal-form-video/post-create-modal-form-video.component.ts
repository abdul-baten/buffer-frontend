import { AppState } from 'src/app/reducers';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { E_POST_STATUS } from '@core/enum';
import { finalize, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION, I_MEDIA } from '@core/model';
import { MatStepper } from '@angular/material/stepper';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { selectNewPostMedias } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal-form-video',
  templateUrl: './post-create-modal-form-video.component.html',
  styleUrls: ['./post-create-modal-form-video.component.scss'],
})
export class PostCreateModalFormVideoComponent implements OnInit, OnDestroy {
  @Input() formHeader = 'Upload your media';
  currentDateTime: Date;
  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();
  eventCreateTypeVideoForm: FormGroup;
  loadingState$: Observable<boolean>;
  postStatus = E_POST_STATUS;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];

  menuItems: MenuItem[];

  constructor(
    private readonly stepper: MatStepper,
    private readonly formBuilder: FormBuilder,
    private readonly postCreateModalFacade: PostCreateModalFacade,
    private readonly store: Store<AppState>,
  ) {
    this.eventCreateTypeVideoForm = this.biuldPostCreateTypeImageForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostDate().subscribe(postScheduleDateTime => {
        this.currentDateTime = new Date(postScheduleDateTime);
        this.eventCreateTypeVideoForm.patchValue({ postScheduleDateTime: new Date(postScheduleDateTime) });
      }),
    );

    this.loadingState$ = this.postCreateModalFacade.getLoadingState();
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
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private biuldPostCreateTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postScheduleDateTime: [null, Validators.required],
      postCaption: [null, Validators.required],
    });
  }

  changeConnectionSelection(connections: Partial<I_CONNECTION>[]): void {
    this.selectedConnections = connections;
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
  }

  isButtonDisabled(): Observable<boolean> {
    return this.store.select(selectNewPostMedias).pipe(
      map((medias: I_MEDIA[]) => {
        return !!!medias.length || !!!this.selectedConnections.length || this.eventCreateTypeVideoForm.invalid;
      }),
    );
  }

  savePost(postStatus: E_POST_STATUS): void {
    if (this.eventCreateTypeVideoForm.valid) {
      const { value } = this.eventCreateTypeVideoForm;
      this.postCreateModalFacade
        .sendPost(value, postStatus, this.selectedConnections)
        .pipe(finalize(() => this.eventCreateTypeVideoForm.controls.postCaption.reset()))
        .subscribe();
    }
  }
}
