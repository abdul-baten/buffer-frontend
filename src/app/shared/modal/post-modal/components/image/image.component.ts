import { AppState } from 'src/app/reducers';
import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { EPostStatus, EPostType } from 'src/app/core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConnection, I_MEDIA, IPost } from 'src/app/core/model';
import { map } from 'rxjs/operators';
import { MenuItem } from 'primeng/api/menuitem';
import { noop, Observable, Subscription } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { selectNewPostMedias } from 'src/app/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buffer-image',
  styleUrls: ['./image.component.css'],
  templateUrl: './image.component.html',
})
export class ImageComponent implements OnInit, OnDestroy {
  @Output() tabSelected = new EventEmitter<number>();
  currentDateTime: Date = new Date();
  imageForm: FormGroup;
  menu_items: MenuItem[] = [];
  postStatus = EPostStatus;
  postType = EPostType;
  private subscriptions$ = new Subscription();
  selectedConnections: Partial<IConnection>[] = [];

  constructor(private facade: PostModalFacade, private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.imageForm = this.biuldImageForm();
  }

  private biuldImageForm(): FormGroup {
    return this.formBuilder.group({
      postScheduleDateTime: [null, Validators.required],
      postCaption: [null, Validators.required],
    });
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
          this.imageForm.patchValue({ postCaption });
        }
        this.imageForm.patchValue({ postScheduleDateTime: new Date(postScheduleDateTime) });
      }),
    );
  }

  previous(): void {
    this.tabSelected.emit(0);
  }

  changeConnectionSelection(connections: Partial<IConnection>[]): void {
    this.selectedConnections = connections;
  }

  isButtonDisabled(): Observable<boolean> {
    return this.store.select(selectNewPostMedias).pipe(
      map((medias: I_MEDIA[]) => {
        return !!!medias.length || !!!this.selectedConnections.length || this.imageForm.invalid;
      }),
    );
  }

  savePost(postStatus: EPostStatus): void {
    if (this.imageForm.valid) {
      const { value } = this.imageForm;
      this.subscriptions$.add(this.facade.sendPost(EPostType.IMAGE, value, postStatus, this.selectedConnections).subscribe(noop));
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
