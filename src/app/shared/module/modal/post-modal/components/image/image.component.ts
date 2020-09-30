import { AppState } from 'src/app/reducers';
import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION, I_MEDIA, I_POST } from '@core/model';
import { map } from 'rxjs/operators';
import { MenuItem } from 'primeng/api/menuitem';
import { noop, Observable } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { selectNewPostMedias } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--image',
  styleUrls: ['./image.component.scss'],
  templateUrl: './image.component.html',
})
export class ImageComponent implements OnInit, OnDestroy {
  @Output() tabSelected = new EventEmitter<number>();
  currentDateTime: Date;
  imageForm: FormGroup;
  menuItems: MenuItem[];
  postStatus = E_POST_STATUS;
  postType = E_POST_TYPE;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];

  constructor(private facade: PostModalFacade, private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.imageForm = this.biuldImageForm();
  }

  private biuldImageForm(): FormGroup {
    return this.formBuilder.group({
      postScheduleDateTime: [null, Validators.required],
      postCaption: [null, Validators.required],
    });
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
      this.facade.getPostInfo().subscribe((postInfo: I_POST) => {
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

  changeConnectionSelection(connections: Partial<I_CONNECTION>[]): void {
    this.selectedConnections = connections;
  }

  isButtonDisabled(): Observable<boolean> {
    return this.store.select(selectNewPostMedias).pipe(
      map((medias: I_MEDIA[]) => {
        return !!!medias.length || !!!this.selectedConnections.length || this.imageForm.invalid;
      }),
    );
  }

  savePost(postStatus: E_POST_STATUS): void {
    if (this.imageForm.valid) {
      const { value } = this.imageForm;
      this.subscriptions$.add(this.facade.sendPost(E_POST_TYPE.IMAGE, value, postStatus, this.selectedConnections).subscribe(noop));
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
