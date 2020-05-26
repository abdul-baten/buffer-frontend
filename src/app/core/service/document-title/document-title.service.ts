import { ActivatedRoute } from '@angular/router';
import { I_DOCUMENT } from '@core/model';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class DocumentTitleService {
  constructor(private title: Title) {}

  setDocumentTitle(titleString: string): void {
    this.title.setTitle(titleString);
  }

  setDocumentTitleFromRouteData(activatedRoute: ActivatedRoute): Subscription {
    return activatedRoute.data.subscribe((documentInfo: I_DOCUMENT) => this.setDocumentTitle(documentInfo.title));
  }
}
