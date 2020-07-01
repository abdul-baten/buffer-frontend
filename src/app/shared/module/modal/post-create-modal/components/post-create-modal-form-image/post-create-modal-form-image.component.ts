import { AppState } from 'src/app/reducers';
import { Component, HostListener, Input, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { E_POST_STATUS } from '@core/enum';
import { finalize, map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION, I_MEDIA } from '@core/model';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { selectNewPostMedias } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal-form-image',
  templateUrl: './post-create-modal-form-image.component.html',
  styleUrls: ['./post-create-modal-form-image.component.scss'],
})
export class PostCreateModalFormImageComponent implements OnDestroy {
  @Input() formHeader = 'Upload your media';
  currentDateTime: Date;
  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();
  eventCreateTypeImageForm: FormGroup;
  loadingState$: Observable<boolean>;
  postStatus = E_POST_STATUS;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];

  constructor(
    private stepper: MatStepper,
    private formBuilder: FormBuilder,
    private postCreateModalFacade: PostCreateModalFacade,
    private store: Store<AppState>,
  ) {
    this.eventCreateTypeImageForm = this.biuldPostCreateTypeImageForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostDate().subscribe(postScheduleDateTime => {
        this.currentDateTime = new Date(postScheduleDateTime);
        this.eventCreateTypeImageForm.patchValue({ postScheduleDateTime: new Date(postScheduleDateTime) });
      }),
    );

    this.loadingState$ = this.postCreateModalFacade.getLoadingState();
  }

  private biuldPostCreateTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postScheduleDateTime: new FormControl(null, Validators.required),
      postCaption: new FormControl(null, Validators.required),
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
  }

  changeConnectionSelection(connections: Partial<I_CONNECTION>[]): void {
    this.selectedConnections = connections;
  }

  isButtonDisabled(): Observable<boolean> {
    return this.store.select(selectNewPostMedias).pipe(
      map((medias: I_MEDIA[]) => {
        return !!!medias.length || !!!this.selectedConnections.length || this.eventCreateTypeImageForm.invalid;
      }),
    );
  }

  savePost(postStatus: E_POST_STATUS): void {
    if (this.eventCreateTypeImageForm.valid) {
      const { value } = this.eventCreateTypeImageForm;
      this.subscriptions$.add(
        this.postCreateModalFacade
          .sendPost(value, postStatus, this.selectedConnections)
          .pipe(finalize(() => this.eventCreateTypeImageForm.controls.postCaption.reset()))
          .subscribe(),
      );
    }
  }
}
