import { Component, OnDestroy, HostListener, Output, EventEmitter } from '@angular/core';
import { E_POST_TYPE } from '@core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Output() tabSelected = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder, private postCreateModalFacade: PostModalFacade) {
    this.typeForm = this.buildTypeForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostType().subscribe((postType: E_POST_TYPE) => {
        if (postType) {
          this.postCreateModalFacade.setPostType(postType);
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
    this.typeForm.reset();
  }

  selectTab(index: number): void {
    this.tabSelected.emit(index);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
