// Core Modules
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, HostListener, OnDestroy } from '@angular/core';

// Third Party Modules
import { SubSink } from 'subsink';

// Error States
import { CustomFormStateMatcher } from '@core/error-state/error-state-matcher.state';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

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

  eventEditPostFormErrorMatcher = new CustomFormStateMatcher();

  eventEditTypeVideoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private scheduleFacade: ScheduleFacade) {
    this.eventEditTypeVideoForm = this.biuldPostEditTypeImageForm();

    this.subscriptions$.add(
      this.scheduleFacade.getPostDate().subscribe(postDate => {
        this.currentDateTime = new Date(postDate);
        this.eventEditTypeVideoForm.patchValue({ postDate: new Date(postDate) });
      }),
    );
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
