import { ActivatedRoute } from '@angular/router';
import { DocumentInterface } from '@core/model/document/document.model';
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
    return activatedRoute.data.subscribe((documentInfo: DocumentInterface) =>
      this.setDocumentTitle(documentInfo.title),
    );
  }
}
