import { Injectable } from '@angular/core';
import type { DocumentMetaService } from 'src/app/core/service';

@Injectable()
export class VideoFacade {
  constructor (private readonly documentMetaService: DocumentMetaService) {}

  public updateMetaTag (name: string, content: string): void {
    this.documentMetaService.addDocumentMetaTag({
      content,
      name
    }, true);
  }
}
