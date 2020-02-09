import * as fromPostCreateActions from '../action/post-create.action';
import { CalPostInterface } from '@core/model/post/post.model';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { format, formatISO, roundToNearestMinutes } from 'date-fns';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { POST_TYPE } from '@core/enum/post/post-type.enum';
import { postTypeMap } from '@core/model/post/post-type.model';
import { selectNewPostDate, selectNewPostType } from '../selector/post-create.selector';
import { Store } from '@ngrx/store';

@Injectable()
export class PostCreateModalFacade {
  constructor(private store: Store<CalPostInterface>, private injector: Injector) {}

  setPostType(postType: POST_TYPE): void {
    this.store.dispatch(fromPostCreateActions.setNewPostType({ postType }));
  }

  getPostType(): Observable<POST_TYPE> {
    return this.store.select(selectNewPostType);
  }

  setNewPostDate(postDateTime: string): void {
    const postOriginalDate = formatISO(roundToNearestMinutes(new Date(postDateTime), { nearestTo: 15 }));
    this.store.dispatch(fromPostCreateActions.setNewPostDate({ postOriginalDate }));
  }

  getPostDate(): Observable<string> {
    return this.store.select(selectNewPostDate);
  }

  setPostData(formData: CalPostInterface): void {
    const postDate = format(new Date(formData.postDate), 'MM/dd/yyyy');
    const postTime = format(new Date(formData.postDate), 'hh:mm a');
    const postData = Object.assign(formData, { postDate, postTime });

    this.store.dispatch(fromPostCreateActions.setNewPostData({ postData }));
  }

  generateDropZoneConfig(type: POST_TYPE): DropzoneConfigInterface {
    const injectableService = postTypeMap.get(type);
    const service = this.injector.get(injectableService);
    return service.generateConfig();
  }
}
