import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { E_POST_STATUS, E_POST_TYPE } from 'src/app/core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION, I_POST } from 'src/app/core/model';
import { MenuItem } from 'primeng/api/menuitem';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'buffer--text',
  styleUrls: ['./text.component.css'],
  templateUrl: './text.component.html',
})
export class TextComponent implements OnInit, OnDestroy {
  @Output() tabSelected = new EventEmitter<number>();
  @Input() dialogRef: DynamicDialogRef = new DynamicDialogRef();
  currentDateTime: Date = new Date();
  menuItems: MenuItem[] = [];
  postStatus = E_POST_STATUS;
  postType = E_POST_TYPE;
  private subscriptions$ = new Subscription();
  selectedConnections: Partial<I_CONNECTION>[] = [];
  textForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly facade: PostModalFacade) {
    this.textForm = this.buildTextForm();
  }

  ngOnInit(): void {
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
      this.facade.getPostInfo().subscribe((postInfo: I_POST) => {
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

  previous(): void {
    this.tabSelected.emit(0);
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
      this.subscriptions$.add(
        this.facade.sendPost(E_POST_TYPE.TEXT, value, postStatus, this.selectedConnections).subscribe(() => {
          this.dialogRef.destroy();
        }),
      );
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
