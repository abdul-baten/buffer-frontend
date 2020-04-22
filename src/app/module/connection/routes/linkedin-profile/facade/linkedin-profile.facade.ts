import { ActivatedRoute, Router } from '@angular/router';
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class LinkedInProfileFacade {
  constructor(private documentTitleService: DocumentTitleService, private router: Router) {}

  setDocumentTitle(activatedRoute: ActivatedRoute): Subscription {
    return this.documentTitleService.setDocumentTitleFromRouteData(activatedRoute);
  }

  navigateToProfile(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }
}
