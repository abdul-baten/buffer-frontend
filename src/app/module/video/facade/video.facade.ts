import { DocumentMetaService } from '@core/service/document-meta/document-meta.service';
import { Injectable } from '@angular/core';

@Injectable()
export class VideoFacade {
  constructor(private readonly documentMetaService: DocumentMetaService) {}

  updateMetaTag(name: string, content: string) {
    this.documentMetaService.addDocumentMetaTag({ name, content }, true);
  }
}
