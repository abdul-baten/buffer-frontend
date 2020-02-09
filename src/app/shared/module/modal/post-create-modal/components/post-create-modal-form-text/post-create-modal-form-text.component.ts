import { CommonValidator } from '@core/validation/common.validation';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal-form-text',
  templateUrl: './post-create-modal-form-text.component.html',
  styleUrls: ['./post-create-modal-form-text.component.scss'],
})
export class PostCreateModalFormTextComponent implements OnDestroy {
  formHeader = 'Write status';
  formHeaderIcon = 'text_fields';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventCreateTypeTextForm: FormGroup;

  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private stepper: MatStepper,
    private postCreateModalFacade: PostCreateModalFacade,
  ) {
    this.eventCreateTypeTextForm = this.buildPostCreateTypeTextForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostDate().subscribe(postDate => {
        this.currentDateTime = new Date(postDate);
        this.eventCreateTypeTextForm.patchValue({ postDate: new Date(postDate) });
      }),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private buildPostCreateTypeTextForm(): FormGroup {
    return this.formBuilder.group({
      postLocation: null,
      postDate: [null, Validators.required],
      postCaption: [null, Validators.required],
      postLink: [null, CommonValidator.validURL],
    });
  }

  handlePreviousBtnClick(): void {
    this.stepper.reset();
  }

  handleTextFormSubmit(): void {
    if (this.eventCreateTypeTextForm.valid) {
      const { value } = this.eventCreateTypeTextForm;

      this.postCreateModalFacade.setPostData(value);
    }
  }
}
