// Core Modules
import { Injectable } from '@angular/core';

// Services
import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Router } from '@angular/router';

@Injectable()
export class SignupFacade {
  constructor(private router: Router, private documentTitleService: DocumentTitleService) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }

  navigateToPage(authURL: string): void {
    this.router.navigateByUrl(authURL);
  }
}
