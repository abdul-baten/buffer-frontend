import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileFacade {
  constructor(private documentTitleService: DocumentTitleService) {}

  setDocumentTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }
}
