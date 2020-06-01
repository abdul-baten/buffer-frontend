import { AppState } from 'src/app/reducers';
import { ConnectionService } from '@core/service/connection/connection.service';
import { E_POST_STATUS, E_POST_TYPE } from '@core/enum';
import { format, formatISO, roundToNearestMinutes } from 'date-fns';
import { I_CONNECTION, I_POST, I_POST_TYPE_MAP } from '@core/model';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '@core/service/post/post.service';
import { selectUserId } from 'src/app/selectors/user.selector';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import {
  selectNewPostActiveConnectionID,
  selectNewPostAllData,
  selectNewPostDate,
  selectNewPostType,
} from 'src/app/selectors';
import {
  setNewPostData,
  setNewPostDate,
  setNewPostType,
  setNewPostConnections,
  setNewPostConnectionID,
} from 'src/app/actions';

@Injectable()
export class PostCreateModalFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly injector: Injector,
    private readonly postService: PostService,
    private readonly store: Store<AppState>,
  ) {}

  getConnections(): Observable<I_CONNECTION[]> {
    return this.connectionService.entities$;
  }

  setPostType(postType: E_POST_TYPE): void {
    this.store.dispatch(setNewPostType({ postType }));
  }

  getPostType(): Observable<E_POST_TYPE> {
    return this.store.select(selectNewPostType);
  }

  setNewPostDate(postDateTime: string): void {
    const postOriginalDate = formatISO(roundToNearestMinutes(new Date(postDateTime), { nearestTo: 15 }));
    this.store.dispatch(setNewPostDate({ postOriginalDate }));
  }

  setNewPostActiveConnectionID(activeConnectionID: string): void {
    this.store.dispatch(setNewPostConnectionID({ activeConnectionID }));
  }

  getPostDate(): Observable<string> {
    return this.store.select(selectNewPostDate);
  }

  setPostData(postData: I_POST, postStatus: E_POST_STATUS): Observable<I_POST> {
    const { postScheduleDate } = postData;
    postData.postScheduleDate = format(new Date(postScheduleDate), 'MM/dd/yyyy');
    postData.postScheduleTime = format(new Date(postScheduleDate), 'hh:mm a');
    postData.postStatus = postStatus;

    const userID$ = this.store.select(selectUserId);

    return userID$.pipe(
      switchMap((userID: string) => {
        postData.userID = userID;
        this.store.dispatch(setNewPostData({ postData }));
        return this.store.select(selectNewPostAllData);
      }),
      switchMap((postInfo: I_POST) => {
        return this.postService.addPost(postInfo);
      }),
    );
  }

  setPostConnections(connections: string[]): void {
    this.store.dispatch(setNewPostConnections({ connections }));
  }

  getActiveConnectionID(): Observable<string> {
    return this.store.select(selectNewPostActiveConnectionID);
  }

  generateDropZoneConfig(type: E_POST_TYPE): any {
    const injectableService = I_POST_TYPE_MAP.get(type);
    const service = this.injector.get(injectableService);
    return service.generateConfig();
  }
}
