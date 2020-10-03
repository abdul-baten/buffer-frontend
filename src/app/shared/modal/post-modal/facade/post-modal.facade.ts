import formatISO from 'date-fns/formatISO';
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import { AppState } from 'src/app/reducers';
import { ConnectionService } from 'src/app/core/service/connection.service';
import { E_POST_STATUS, E_POST_TYPE } from 'src/app/core/enum';
import { forkJoin, Observable } from 'rxjs';
import { I_CONNECTION, I_MEDIA, I_POST, I_POST_TYPE_MAP, I_USER } from 'src/app/core/model';
import { Injectable, Injector } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/service/notification.service';
import { PostService } from 'src/app/core/service/post.service';
import { selectNewPostActiveConnectionID, selectNewPostDate, selectNewPostMedias, selectNewPostType, selectPostInfo } from 'src/app/selectors';
import { setNewPostData, setPostType } from 'src/app/actions';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/core/service/user.service';

@Injectable()
export class PostModalFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly injector: Injector,
    private readonly notificationService: NotificationService,
    private readonly postService: PostService,
    private readonly userService: UserService,
    private store: Store<AppState>,
  ) {}

  getConnections(): Observable<I_CONNECTION[]> {
    return this.connectionService.entities$;
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

  sendPost(postType: E_POST_TYPE, postData: I_POST, postStatus: E_POST_STATUS, connections: Partial<I_CONNECTION>[]): Observable<I_POST[]> {
    const requests: Observable<I_POST>[] = [];
    postData.postCaption = postData.postCaption.trim();
    postData.postStatus = postStatus;
    postData.postScheduleDateTime = formatISO(roundToNearestMinutes(new Date(postData.postScheduleDateTime), { nearestTo: 15 }));
    postData.postType = postType;
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

    return forkJoin([...requests]).pipe(
      map(([...responses]: I_POST[]) => responses as I_POST[]),
      tap(() => {
        this.notificationService.showSuccess(`Your post has been ${postData.postStatus} successfully.`);
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
