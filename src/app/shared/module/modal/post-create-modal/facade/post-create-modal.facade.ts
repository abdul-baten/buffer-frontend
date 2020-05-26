import * as fromPostCreateActions from '../action/post-create.action';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { E_POST_TYPE } from '@core/enum';
import { format, formatISO, roundToNearestMinutes } from 'date-fns';
import { I_POST, I_POST_TYPE_MAP } from '@core/model';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { selectNewPostDate, selectNewPostType } from '../selector/post-create.selector';
import { Store } from '@ngrx/store';

@Injectable()
export class PostCreateModalFacade {
  constructor(private store: Store<I_POST>, private injector: Injector) {}

  setPostType(postType: E_POST_TYPE): void {
    this.store.dispatch(fromPostCreateActions.setNewPostType({ postType }));
  }

  getPostType(): Observable<E_POST_TYPE> {
    return this.store.select(selectNewPostType);
  }

  setNewPostDate(postDateTime: string): void {
    const postOriginalDate = formatISO(roundToNearestMinutes(new Date(postDateTime), { nearestTo: 15 }));
    this.store.dispatch(fromPostCreateActions.setNewPostDate({ postOriginalDate }));
  }

  getPostDate(): Observable<string> {
    return this.store.select(selectNewPostDate);
  }

  setPostData(formData: I_POST): void {
    const postDate = format(new Date(formData.postDate), 'MM/dd/yyyy');
    const postTime = format(new Date(formData.postDate), 'hh:mm a');
    const postData = Object.assign(formData, { postDate, postTime });

    this.store.dispatch(fromPostCreateActions.setNewPostData({ postData }));
  }

  generateDropZoneConfig(type: E_POST_TYPE): DropzoneConfigInterface {
    const injectableService = I_POST_TYPE_MAP.get(type);
    const service = this.injector.get(injectableService);
    return service.generateConfig();
  }
}
