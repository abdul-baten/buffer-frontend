import { Injectable } from '@angular/core';
import { DocumentTitleService } from 'src/app/core/service/document-title/document-title.service';

@Injectable({
  providedIn: 'root'
})
export class LandingFacade {
  constructor(private titleService: DocumentTitleService) {}

  setDocumentTitle(titleString: string): void {
    this.titleService.setDocumentTitle(titleString);
  }
}
