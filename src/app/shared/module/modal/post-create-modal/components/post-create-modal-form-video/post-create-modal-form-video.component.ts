import { Component, HostListener, Input, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-create-modal-form-video',
  templateUrl: './post-create-modal-form-video.component.html',
  styleUrls: ['./post-create-modal-form-video.component.scss'],
})
export class PostCreateModalFormVideoComponent implements OnDestroy {
  nextButtonDisabled = true;
  @Input() formHeader = 'Upload your media';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();

  eventCreateTypeVideoForm: FormGroup;

  constructor(
    private stepper: MatStepper,
    private formBuilder: FormBuilder,
    private postCreateModalFacade: PostCreateModalFacade,
  ) {
    this.eventCreateTypeVideoForm = this.biuldPostCreateTypeImageForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostDate().subscribe(postDate => {
        this.currentDateTime = new Date(postDate);
        this.eventCreateTypeVideoForm.patchValue({ postDate: new Date(postDate) });
      }),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private biuldPostCreateTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postDate: [null, Validators.required],
      postCaption: [null, Validators.required],
    });
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
  }

  onNextButtonEnabled(nextButtonDisabled: boolean): void {
    this.nextButtonDisabled = nextButtonDisabled;
  }
}
