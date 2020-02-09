import { Component, HostListener, Input, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal-form-image',
  templateUrl: './post-create-modal-form-image.component.html',
  styleUrls: ['./post-create-modal-form-image.component.scss'],
})
export class PostCreateModalFormImageComponent implements OnDestroy {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();

  eventCreateTypeImageForm: FormGroup;

  constructor(
    private stepper: MatStepper,
    private formBuilder: FormBuilder,
    private postCreateModalFacade: PostCreateModalFacade,
  ) {
    this.eventCreateTypeImageForm = this.biuldPostCreateTypeImageForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostDate().subscribe(postDate => {
        this.currentDateTime = new Date(postDate);
        this.eventCreateTypeImageForm.patchValue({ postDate: new Date(postDate) });
      }),
    );
  }

  private biuldPostCreateTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postDate: new FormControl(null, Validators.required),
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

  onNextButtonEnabled(nextButtonDisabled: boolean): void {
    this.nextButtonDisabled = nextButtonDisabled;
  }
}
