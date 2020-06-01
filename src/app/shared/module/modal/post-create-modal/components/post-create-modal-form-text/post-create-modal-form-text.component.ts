import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION } from '@core/model';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';
import { SubSink } from 'subsink';
import { E_POST_STATUS } from '@core/enum';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-create-modal-form-text',
  templateUrl: './post-create-modal-form-text.component.html',
  styleUrls: ['./post-create-modal-form-text.component.scss'],
})
export class PostCreateModalFormTextComponent implements OnDestroy, OnInit {
  activeConnectionID$: Observable<string>;
  connections$: Observable<I_CONNECTION[]>;
  currentDateTime: Date;
  eventCreatePostFormErrorMatcher = new CustomFormErrorStateMatcher();
  eventCreateTypeTextForm: FormGroup;
  formHeader = 'Write status';
  postStatus = E_POST_STATUS;
  private subscriptions$ = new SubSink();
  selectedConnections: string[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly matDialog: MatDialog,
    private readonly postCreateModalFacade: PostCreateModalFacade,
    private readonly stepper: MatStepper,
  ) {
    this.eventCreateTypeTextForm = this.buildPostCreateTypeTextForm();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostDate().subscribe(postScheduleDate => {
        this.currentDateTime = new Date(postScheduleDate);
        this.eventCreateTypeTextForm.patchValue({ postScheduleDate: new Date(postScheduleDate) });
      }),
    );

    this.connections$ = this.postCreateModalFacade.getConnections();
  }

  ngOnInit(): void {
    this.activeConnectionID$ = this.postCreateModalFacade.getActiveConnectionID();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private buildPostCreateTypeTextForm(): FormGroup {
    return this.formBuilder.group({
      postCaption: [null, Validators.required],
      postScheduleDate: [null, Validators.required],
    });
  }

  connectionSelected(connectionID: string) {
    const findConnection = this.selectedConnections.find((entry: string) => entry === connectionID);
    const findConnectionIndex = this.selectedConnections.findIndex((entry: string) => entry === connectionID);
    if (!findConnection) {
      this.selectedConnections.push(connectionID);
    } else {
      this.selectedConnections.splice(findConnectionIndex, 1);
    }
  }

  isConnectionSelected(connectionID: string): boolean {
    const findConnection = this.selectedConnections.find((entry: string) => entry === connectionID);
    return !!findConnection;
  }

  handlePreviousBtnClick(): void {
    this.stepper.reset();
  }

  savePost(postStatus: E_POST_STATUS): void {
    if (this.eventCreateTypeTextForm.valid) {
      const { value } = this.eventCreateTypeTextForm;
      this.postCreateModalFacade.setPostConnections(this.selectedConnections);
      this.subscriptions$.add(
        this.postCreateModalFacade.setPostData(value, postStatus).subscribe(() => {
          this.matDialog.closeAll();
        }),
      );
    }
  }
}
