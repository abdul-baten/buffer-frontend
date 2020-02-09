import { CommonValidator } from '@core/validation/common.validation';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-edit-modal-form-text',
  templateUrl: './post-edit-modal-form-text.component.html',
  styleUrls: ['./post-edit-modal-form-text.component.scss'],
})
export class PostEditModalFormTextComponent implements OnDestroy {
  formHeader = 'Write status';
  formHeaderIcon = 'text_fields';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventEditTypeTextForm: FormGroup;

  eventEditPostFormErrorMatcher = new CustomFormErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) {
    this.eventEditTypeTextForm = this.buildPostEditTypeTextForm();

    this.subscriptions$
      .add
      // this.scheduleFacade.getPostDate().subscribe(postDate => {
      //   this.currentDateTime = new Date(postDate);
      //   this.eventEditTypeTextForm.patchValue({ postDate: new Date(postDate) });
      // }),
      ();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private buildPostEditTypeTextForm(): FormGroup {
    return this.formBuilder.group({
      postLocation: null,
      postDate: [null, Validators.required],
      postCaption: [null, Validators.required],
      postLink: [null, CommonValidator.validURL],
    });
  }

  handleTextFormSubmit(): void {
    if (this.eventEditTypeTextForm.valid) {
      // const { value } = this.eventEditTypeTextForm;
      // this.scheduleFacade.setPostData(value);
    }
  }
}
