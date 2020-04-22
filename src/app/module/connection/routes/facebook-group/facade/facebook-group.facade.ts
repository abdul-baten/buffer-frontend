import { ActivatedRoute } from '@angular/router';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class FacebookGroupFacade {
  constructor(private documentTitleService: DocumentTitleService) {}

  setDocumentTitle(activatedRoute: ActivatedRoute): Subscription {
    return this.documentTitleService.setDocumentTitleFromRouteData(activatedRoute);
  }
}
