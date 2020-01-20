// Core Modules
import { Injectable } from '@angular/core';

// Services
import { DocumentTitleService } from '@core/service/document-title/document-title.service';

@Injectable()
export class LandingFacade {
  constructor(private titleService: DocumentTitleService) {}

  setDocumentTitle(titleString: string): void {
    this.titleService.setDocumentTitle(titleString);
  }
}
