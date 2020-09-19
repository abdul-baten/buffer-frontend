import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { E_POST_STATUS } from '@core/enum';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION, I_POST } from '@core/model';
import { MatStepper } from '@angular/material/stepper';
import { MenuItem } from 'primeng/api/menuitem';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--text',
  styleUrls: ['./text.component.scss'],
  templateUrl: './text.component.html',
})
export class TextComponent implements OnInit, OnDestroy {
  currentDateTime: Date;
  menuItems: MenuItem[] = [];
  postStatus = E_POST_STATUS;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];
  textForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly postCreateModalFacade: PostModalFacade,
    private readonly stepper: MatStepper,
  ) {
    this.textForm = this.buildTextForm();
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Schedule',
        icon: 'pi pi-calendar-plus',
        command: () => {
          this.savePost(this.postStatus.SCHEDULED);
        },
      },
      { separator: true },
      {
        label: 'Save post',
        icon: 'pi pi-save',
        command: () => {
          this.savePost(this.postStatus.SAVED);
        },
      },
    ];

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostInfo().subscribe((postInfo: I_POST) => {
        const { postCaption, postScheduleDateTime } = postInfo;
        if (!!postCaption) {
          this.textForm.patchValue({ postCaption });
        }
        this.textForm.patchValue({ postScheduleDateTime: new Date(postScheduleDateTime) });
      }),
    );
  }

  private buildTextForm(): FormGroup {
    return this.formBuilder.group({
      postCaption: [null, Validators.required],
      postScheduleDateTime: [null, Validators.required],
    });
  }

  onPreviousButtonClicked(): void {
    this.stepper.reset();
  }

  changeConnectionSelection(connections: Partial<I_CONNECTION>[]): void {
    this.selectedConnections = connections;
  }

  isButtonDisabled(): boolean {
    return this.textForm.invalid || !!!this.selectedConnections.length;
  }

  savePost(postStatus: E_POST_STATUS): void {
    if (this.textForm.valid) {
      const { value } = this.textForm;
      this.postCreateModalFacade
        .sendPost(value, postStatus, this.selectedConnections)
        .pipe(finalize(() => this.textForm.reset()))
        .subscribe();
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
