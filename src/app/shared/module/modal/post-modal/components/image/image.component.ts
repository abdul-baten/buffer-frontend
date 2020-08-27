import { AppState } from 'src/app/reducers';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { E_POST_STATUS } from '@core/enum';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_CONNECTION, I_MEDIA, I_POST } from '@core/model';
import { MatStepper } from '@angular/material/stepper';
import { MenuItem } from 'primeng/api/menuitem';
import { Observable, noop } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { selectNewPostMedias } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit, OnDestroy {
  currentDateTime: Date;
  imageForm: FormGroup;
  loadingState$: Observable<boolean>;
  menuItems: MenuItem[];
  postStatus = E_POST_STATUS;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];

  constructor(
    private stepper: MatStepper,
    private formBuilder: FormBuilder,
    private postCreateModalFacade: PostModalFacade,
    private store: Store<AppState>,
  ) {
    this.imageForm = this.biuldImageForm();
    this.loadingState$ = this.postCreateModalFacade.getLoadingState();
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
      this.postCreateModalFacade.getPostInfo().subscribe((postInfo: I_POST) => {
        const { postCaption, postScheduleDateTime } = postInfo;
        if (!!postCaption) {
          this.imageForm.patchValue({ postCaption });
        }
        this.imageForm.patchValue({ postScheduleDateTime: new Date(postScheduleDateTime) });
      }),
    );
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
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
      this.subscriptions$.add(this.postCreateModalFacade.sendPost(value, postStatus, this.selectedConnections).subscribe(noop));
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
