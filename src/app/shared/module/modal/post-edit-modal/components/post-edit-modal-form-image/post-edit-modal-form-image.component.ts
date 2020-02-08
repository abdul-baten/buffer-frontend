import { Component, HostListener, Input, OnDestroy } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--post-edit-modal-form-image',
  templateUrl: './post-edit-modal-form-image.component.html',
  styleUrls: ['./post-edit-modal-form-image.component.scss'],
})
export class PostEditModalFormImageComponent implements OnDestroy {
  @Input() formHeaderIcon = 'filter';
  @Input() formHeader = 'Upload your media';

  private subscriptions$ = new SubSink();

  currentDateTime: Date;

  eventEditPostFormErrorMatcher = new CustomFormErrorStateMatcher();

  eventEditTypeImageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventEditTypeImageForm = this.biuldPostEditTypeImageForm();

    // this.subscriptions$.add(
    //   this.scheduleFacade.getPostDate().subscribe(postDate => {
    //     this.currentDateTime = new Date(postDate);
    //     this.eventEditTypeImageForm.patchValue({ postDate: new Date(postDate) });
    //   }),
    // );
  }

  private biuldPostEditTypeImageForm(): FormGroup {
    return this.formBuilder.group({
      postDate: new FormControl(null, Validators.required),
      postCaption: new FormControl(null, Validators.required),
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
