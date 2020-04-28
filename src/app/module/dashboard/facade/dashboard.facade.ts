import { DocumentTitleService } from '@core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardFacade {
  constructor(private documentTitleService: DocumentTitleService) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }
}
