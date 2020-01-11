// Core Modules
import { Injectable } from '@angular/core';

// Services
import { DocumentTitleService } from '@core/service/document-title/document-title.service';

@Injectable()
export class SigninFacade {
  constructor(private documentTitleService: DocumentTitleService) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }
}
