import { Component, HostListener, Input, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-edit-modal-form-video',
  templateUrl: './post-edit-modal-form-video.component.html',
  styleUrls: ['./post-edit-modal-form-video.component.scss'],
})
export class PostEditModalFormVideoComponent implements OnDestroy {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventEditPostFormErrorMatcher = new CustomFormErrorStateMatcher();

  eventEditTypeVideoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventEditTypeVideoForm = this.biuldPostEditTypeImageForm();

    this.subscriptions$
      .add
      // this.scheduleFacade.getPostDate().subscribe(postDate => {
      //   this.currentDateTime = new Date(postDate);
      //   this.eventEditTypeVideoForm.patchValue({ postDate: new Date(postDate) });
      // }),
      ();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private biuldPostEditTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postDate: [null, Validators.required],
      postCaption: [null, Validators.required],
    });
  }

  onPreviousButtonClicked(): void {}

  onNextButtonEnabled(nextButtonDisabled: boolean): void {
    this.nextButtonDisabled = nextButtonDisabled;
  }
}
