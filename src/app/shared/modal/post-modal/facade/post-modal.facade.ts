import dayJs from 'dayjs';
import { ComposeService } from 'src/app/core/service/compose.service';
import { ConnectionService } from 'src/app/core/service/connection.service';
import { EConnectionType, EPostStatus, EPostType } from 'src/app/core/enum';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { I18nPluralPipe } from '@angular/common';
import { IConnection, IPost, IUser } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/service/notification.service';
import { PostService } from 'src/app/core/service/post.service';
import { UserService } from 'src/app/core/service/user.service';

@Injectable()
export class PostModalFacade {
  private compose_id: Observable<string>;
  public subscriptions$ = new Subscription();
  private post_map= {
    '=1': 'your post',
    other: 'all your posts' };

  // eslint-disable-next-line max-params
  constructor (
    private readonly composeService: ComposeService,
    private readonly connectionService: ConnectionService,
    private readonly notificationService: NotificationService,
    private readonly pluralPipe: I18nPluralPipe,
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {
    this.compose_id = this.userService.getUserFromState().pipe(map(({ id }: IUser) => id));
  }

  public getConnections (): Observable<IConnection[]> {
    return this.connectionService.entities$;
  }

  public getComposeInfo (): Observable<IPost> {
    return this.compose_id.pipe(switchMap((id: string) => this.composeService.getComposeInfo(id)));
  }

  private getNearestMinute (input_date: Date, nearest_minute: number): Date {
    const date = dayJs(input_date).toDate();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes() + (seconds / Number.parseInt('60', 10));
    const rounded_minutes = Math.floor(minutes / nearest_minute) * nearest_minute;
    const remainder_minutes = minutes % nearest_minute;
    const added_minutes = Math.round(remainder_minutes / nearest_minute) * nearest_minute;

    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      rounded_minutes + added_minutes
    );
  }

  public setComposeInfo (post_info: IPost): Observable<void> {
    const rounded_date_time = this.getNearestMinute(post_info.post_date_time, Number.parseInt('15', 10));

    return this.compose_id.pipe(map((id: string) => {
      const post_date_time = rounded_date_time.toISOString();
      const post_data = Object.assign(post_info, {
        id,
        post_date_time,
        post_user_id: id
      });

      return this.composeService.addPostToState(post_data);
    }));
  }

  private getPostStatusForNotification (post_status: EPostStatus): string {
    let status:string;

    switch (post_status) {
    case EPostStatus.DRAFT:
      status = 'saved';
      break;
    case EPostStatus.SCHEDULE:
      status = 'scheduled';
      break;
    default:
      status = 'published';
      break;
    }

    return status;
  }

  public sendPost (post_type: EPostType, post_info: Partial<IPost>, post_status: EPostStatus, connections: Partial<IConnection>[]): Observable<string> {
    const requests: Observable<IPost>[] = [];
    const post_data: Partial<IPost> = {
      ...post_info,
      post_status,
      post_type
    };

    this.subscriptions$.add(this.getComposeInfo().subscribe(({ post_media, post_user_id }: IPost) => {
      Object.assign(post_data, {
        post_media,
        post_user_id
      });
    }));

    connections.forEach((connection: Partial<IConnection>) => {
      const { connection_type, id } = connection;
      const cloned_post_info = {
        ...post_data,
        post_connection_id: id,
        post_connection_type: connection_type
      };

      requests.push(this.postService.addPost(cloned_post_info as IPost, connection_type as EConnectionType));
    });

    const status = this.getPostStatusForNotification(post_status);
    const { length } = requests;

    return forkJoin([...requests]).pipe(
      switchMap(() => this.compose_id),
      tap(() => {
        this.notificationService.showSuccess(`We've ${status} ${this.pluralPipe.transform(length, this.post_map)} successfully.`);
      })
    );
  }

  public removeComposeInfo (id: string): void {
    this.composeService.removeOneFromCache(id);
  }
}
