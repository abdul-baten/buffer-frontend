import { Component, OnDestroy, HostListener } from '@angular/core';
import { E_POST_TYPE } from '@core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--type',
  styleUrls: ['./type.component.scss'],
  templateUrl: './type.component.html',
})
export class TypeComponent implements OnDestroy {
  typeForm: FormGroup;
  private subscriptions$ = new SubSink();

  constructor(private formBuilder: FormBuilder, private postCreateModalFacade: PostModalFacade, private stepper: MatStepper) {
    this.typeForm = this.buildTypeForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostType().subscribe((postType: E_POST_TYPE) => {
        if (postType) {
          this.postCreateModalFacade.setPostType(postType);
          setTimeout(() => {
            this.stepper.next();
          }, 400);
        }
      }),
    );
  }

  private buildTypeForm(): FormGroup {
    return this.formBuilder.group({
      postType: [null, Validators.required],
    });
  }

  typeSelected(): void {
    const { postType } = this.typeForm.value;
    this.postCreateModalFacade.setPostType(postType);
  }

  continue(): void {
    this.stepper.next();
    this.typeForm.reset();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
