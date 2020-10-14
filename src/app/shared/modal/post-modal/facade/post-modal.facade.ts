import formatISO from 'date-fns/formatISO';
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import { ConnectionService } from 'src/app/core/service/connection.service';
import { EPostStatus, EPostType } from 'src/app/core/enum';
import { forkJoin, Observable } from 'rxjs';
import {
  IConnection,
  IPost,
  IUser,
  PostTypeMap
} from 'src/app/core/model';
import { Injectable, Injector } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/service/notification.service';
import { PostService } from 'src/app/core/service/post.service';
import { UserService } from 'src/app/core/service/user.service';

@Injectable()
export class PostModalFacade {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly injector: Injector,
    private readonly notificationService: NotificationService,
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {}

  getConnections (): Observable<IConnection[]> {
    return this.connectionService.entities$;
  }

  setNewPostInfo (post_info: IPost): void {
    const post_date_time = formatISO(roundToNearestMinutes(new Date(post_info.post_date_time), { nearestTo: 15 }));

    Object.assign(post_info, { post_date_time });
  }

  sendPost (post_type: EPostType, post_info: IPost, post_status: EPostStatus, connections: Partial<IConnection>[]): Observable<IPost[]> {
    const requests: Observable<IPost>[] = [];
    const post_date_time = formatISO(roundToNearestMinutes(new Date(post_info.post_date_time), { nearestTo: 15 }));
    const post_data: Partial<IPost> = {
      post_date_time,
      post_status,
      post_type
    };

    /*
     * This.store.select(selectNewPostMedias).subscribe((postMedias: IMedia[]) => {
     *   if (postMedias.length > 0) {
     *     post_info.postMedia = postMedias;
     *   }
     * });
     */
    this.userService.getUserFromState().subscribe(({ id: post_user_id }: IUser) => {
      Object.assign(post_data, { post_user_id });
    });

    connections.forEach((connection: Partial<IConnection>) => {
      post_data.post_connection = connection;
      const cloned_post_info = { ...post_data };

      requests.push(this.postService.addPost(cloned_post_info as IPost));
    });

    return forkJoin([...requests]).pipe(
      map(([...responses]: IPost[]) => responses as IPost[]),
      tap(() => {
        this.notificationService.showSuccess(`Your post has been ${post_info.postStatus} successfully.`);
      })
    );
  }

  generateDropZoneConfig (type: EPostType): Record<string, any> {
    const injectable_service = PostTypeMap.get(type);
    const service = this.injector.get(injectable_service);

    return service.generateConfig();
  }
}
