import { DocumentTitleService } from 'src/app/core/service/document-title/document-title.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninFacade {
  constructor(private documentTitleService: DocumentTitleService) {}

  setTitle(titleString: string): void {
    this.documentTitleService.setDocumentTitle(titleString);
  }
}
