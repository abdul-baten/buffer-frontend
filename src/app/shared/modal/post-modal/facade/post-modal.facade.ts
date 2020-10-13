import formatISO from 'date-fns/formatISO';
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import { forkJoin, Observable } from 'rxjs';
import {
  IConnection,
  IPost,
  IUser,
  PostTypeMap
} from 'src/app/core/model';
import { Injectable, Injector } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import type { ConnectionService } from 'src/app/core/service/connection.service';
import type { EPostStatus, EPostType } from 'src/app/core/enum';
import type { NotificationService } from 'src/app/core/service/notification.service';
import type { PostService } from 'src/app/core/service/post.service';
import type { UserService } from 'src/app/core/service/user.service';

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
    const post = JSON.parse(JSON.stringify(post_info));

    post.post_date_time = formatISO(roundToNearestMinutes(new Date(post_info.postScheduleDateTime), { nearestTo: 15 }));
  }

  sendPost (post_type: EPostType, post_info: IPost, post_status: EPostStatus, connections: Partial<IConnection>[]): Observable<IPost[]> {
    const requests: Observable<IPost>[] = [];

    post_info.postCaption = post_info.postCaption.trim();
    post_info.post_status = post_status;
    post_info.postScheduleDateTime = formatISO(roundToNearestMinutes(new Date(post_info.postScheduleDateTime), { nearestTo: 15 }));
    post_info.post_type = post_type;

    /*
     * This.store.select(selectNewPostMedias).subscribe((postMedias: IMedia[]) => {
     *   if (postMedias.length > 0) {
     *     post_info.postMedia = postMedias;
     *   }
     * });
     */
    this.userService.getUserFromState().subscribe(({ id }: IUser) => {
      post_info.post_user_id = id;

      return post_info;
    });

    connections.forEach((connection: Partial<IConnection>) => {
      post_info.post_connection = connection;
      const clonedpost_info = JSON.parse(JSON.stringify(post_info));

      requests.push(this.postService.addPost(clonedpost_info));
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
