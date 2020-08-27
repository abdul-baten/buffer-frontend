import { AppState } from 'src/app/reducers';
import { ConnectionService } from '@core/service/connection/connection.service';
import { DialogService } from 'primeng/dynamicdialog';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { finalize, map, tap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { formatISO, roundToNearestMinutes } from 'date-fns';
import { I_CONNECTION, I_MEDIA, I_POST, I_POST_TYPE_MAP, I_USER } from '@core/model';
import { Injectable, Injector } from '@angular/core';
import { NotificationService } from '@core/service/notification/notification.service';
import { PostService } from '@core/service/post/post.service';
import { removeNewPostAllMedia, removeNewPostData, setPostType, setNewPostData } from 'src/app/actions';
import { selectNewPostActiveConnectionID, selectNewPostDate, selectNewPostMedias, selectNewPostType, selectPostInfo } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class PostModalFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly dialogRef: DialogService,
    private readonly injector: Injector,
    private readonly notificationService: NotificationService,
    private readonly postService: PostService,
    private readonly userService: UserService,
    private store: Store<AppState>,
  ) {}

  getConnections(): Observable<I_CONNECTION[]> {
    return this.connectionService.entities$;
  }

  getLoadingState(): Observable<boolean> {
    return this.postService.loading$;
  }

  setPostType(postType: E_POST_TYPE): void {
    this.store.dispatch(setPostType({ postType }));
  }

  getPostType(): Observable<E_POST_TYPE> {
    return this.store.select(selectNewPostType);
  }

  setNewPostData(postInfo: I_POST): void {
    const postData = JSON.parse(JSON.stringify(postInfo));
    postData.postScheduleDateTime = formatISO(roundToNearestMinutes(new Date(postData.postScheduleDateTime), { nearestTo: 15 }));
    this.store.dispatch(setNewPostData({ postData }));
  }

  getPostInfo(): Observable<I_POST> {
    return this.store.select(selectPostInfo);
  }

  getPostDate(): Observable<string> {
    return this.store.select(selectNewPostDate);
  }

  sendPost(postData: I_POST, postStatus: E_POST_STATUS, connections: Partial<I_CONNECTION>[]): Observable<I_POST> {
    this.postService.setLoading(true);
    const requests: any[] = [];
    postData.postCaption = postData.postCaption.trim();
    postData.postStatus = postStatus;
    postData.postScheduleDateTime = formatISO(roundToNearestMinutes(new Date(postData.postScheduleDateTime), { nearestTo: 15 }));
    this.store.select(selectNewPostType).subscribe((postType: E_POST_TYPE) => (postData.postType = postType));
    this.store.select(selectNewPostMedias).subscribe((postMedias: I_MEDIA[]) => {
      if (postMedias.length > 0) {
        postData.postMedia = postMedias;
      }
    });
    this.userService.getUserFromState().subscribe((user: I_USER) => (postData.userID = user.id));

    connections.forEach((connection: Partial<I_CONNECTION>) => {
      postData.postConnection = connection;
      const clonedPostData = JSON.parse(JSON.stringify(postData));
      requests.push(this.postService.addPost(clonedPostData));
    });

    // tslint:disable-next-line
    return forkJoin(...requests).pipe(
      map(([...response]) => response),
      tap(() => {
        this.store.dispatch(removeNewPostData());
        this.dialogRef.dialogComponentRef.destroy();
        this.notificationService.showSuccess(`Your post has been ${postData.postStatus} successfully.`);
      }),
      finalize(() => {
        this.store.dispatch(removeNewPostAllMedia());
        this.postService.setLoading(false);
      }),
    );
  }

  getActiveConnectionID(): Observable<string> {
    return this.store.select(selectNewPostActiveConnectionID);
  }

  generateDropZoneConfig(type: E_POST_TYPE): Record<string, any> {
    const injectableService = I_POST_TYPE_MAP.get(type);
    const service = this.injector.get(injectableService);
    return service.generateConfig();
  }
}
