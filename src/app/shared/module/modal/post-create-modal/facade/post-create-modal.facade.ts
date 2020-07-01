import { AppState } from 'src/app/reducers';
import { ConnectionService } from '@core/service/connection/connection.service';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { finalize, map, tap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { I_CONNECTION, I_MEDIA, I_POST, I_POST_TYPE_MAP, I_USER } from '@core/model';
import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '@core/service/notification/notification.service';
import { PostService } from '@core/service/post/post.service';
import { removeNewPostAllMedia, removeNewPostData, setNewPostDate, setNewPostType } from 'src/app/actions';
import { roundToNearestMinutes, formatISO } from 'date-fns';
import { selectNewPostActiveConnectionID, selectNewPostDate, selectNewPostMedias, selectNewPostType } from 'src/app/selectors';
import { Store } from '@ngrx/store';
import { UserService } from '@core/service/user/user.service';

@Injectable()
export class PostCreateModalFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly injector: Injector,
    private readonly matDialog: MatDialog,
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
    this.store.dispatch(setNewPostType({ postType }));
  }

  getPostType(): Observable<E_POST_TYPE> {
    return this.store.select(selectNewPostType);
  }

  setNewPostDate(postDateTime: Date): void {
    const postOriginalDate = formatISO(roundToNearestMinutes(new Date(postDateTime), { nearestTo: 15 }));
    this.store.dispatch(setNewPostDate({ postOriginalDate }));
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
        this.notificationService.openSnackBar(`Your post has been ${postData.postStatus}.`);
        this.closeAllDialog();
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

  closeAllDialog(): void {
    this.matDialog.closeAll();
  }

  generateDropZoneConfig(type: E_POST_TYPE): Record<string, any> {
    const injectableService = I_POST_TYPE_MAP.get(type);
    const service = this.injector.get(injectableService);
    return service.generateConfig();
  }
}
