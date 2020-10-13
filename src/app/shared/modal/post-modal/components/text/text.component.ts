import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EPostStatus, EPostType } from 'src/app/core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConnection, IPost } from 'src/app/core/model';
import { MenuItem } from 'primeng/api/menuitem';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'buffer-text',
  styleUrls: ['./text.component.css'],
  templateUrl: './text.component.html',
})
export class TextComponent implements OnInit, OnDestroy {
  @Output() tabSelected = new EventEmitter<number>();
  @Input() dialogRef: DynamicDialogRef = new DynamicDialogRef();
  currentDateTime: Date = new Date();
  menu_items: MenuItem[] = [];
  postStatus = EPostStatus;
  postType = EPostType;
  private subscriptions$ = new Subscription();
  selectedConnections: Partial<IConnection>[] = [];
  textForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly facade: PostModalFacade) {
    this.textForm = this.buildTextForm();
  }

  ngOnInit(): void {
    this.menu_items = [
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
      this.facade.getPostInfo().subscribe((postInfo: IPost) => {
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

  changeConnectionSelection(connections: Partial<IConnection>[]): void {
    this.selectedConnections = connections;
  }

  isButtonDisabled(): boolean {
    return this.textForm.invalid || !!!this.selectedConnections.length;
  }

  savePost(postStatus: EPostStatus): void {
    if (this.textForm.valid) {
      const { value } = this.textForm;
      this.subscriptions$.add(
        this.facade.sendPost(EPostType.TEXT, value, postStatus, this.selectedConnections).subscribe(() => {
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
