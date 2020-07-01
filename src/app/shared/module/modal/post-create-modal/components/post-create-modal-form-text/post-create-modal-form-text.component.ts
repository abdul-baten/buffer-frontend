import { Component, HostListener, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { E_POST_STATUS } from '@core/enum';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION } from '@core/model';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal-form-text',
  styleUrls: ['./post-create-modal-form-text.component.scss'],
  templateUrl: './post-create-modal-form-text.component.html',
})
export class PostCreateModalFormTextComponent implements OnDestroy {
  currentDateTime: Date;
  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();
  eventCreateTypeTextForm: FormGroup;
  formHeader = 'Write status';
  loadingState$: Observable<boolean>;
  postStatus = E_POST_STATUS;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly postCreateModalFacade: PostCreateModalFacade,
    private readonly stepper: MatStepper,
  ) {
    this.eventCreateTypeTextForm = this.buildPostCreateTypeTextForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostDate().subscribe(postScheduleDateTime => {
        this.currentDateTime = new Date(postScheduleDateTime);
        this.eventCreateTypeTextForm.patchValue({ postScheduleDateTime: new Date(postScheduleDateTime) });
      }),
    );

    this.loadingState$ = this.postCreateModalFacade.getLoadingState();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private buildPostCreateTypeTextForm(): FormGroup {
    return this.formBuilder.group({
      postCaption: [null, Validators.required],
      postScheduleDateTime: [null, Validators.required],
    });
  }

  handlePreviousBtnClick(): void {
    this.stepper.reset();
  }

  changeConnectionSelection(connections: Partial<I_CONNECTION>[]): void {
    this.selectedConnections = connections;
  }

  isButtonDisabled(): boolean {
    return this.eventCreateTypeTextForm.invalid || !!!this.selectedConnections.length;
  }

  savePost(postStatus: E_POST_STATUS): void {
    if (this.eventCreateTypeTextForm.valid) {
      const { value } = this.eventCreateTypeTextForm;
      this.postCreateModalFacade
        .sendPost(value, postStatus, this.selectedConnections)
        .pipe(finalize(() => this.eventCreateTypeTextForm.controls.postCaption.reset()))
        .subscribe();
    }
  }
}
