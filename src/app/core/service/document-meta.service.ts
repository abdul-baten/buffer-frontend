// Core Modules
import { Injectable } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class DocumentMetaService {
  constructor(private meta: Meta) {}

  addDocumentMetaTag(tag: MetaDefinition, forceCreation: boolean = false): void {
    this.meta.addTag(tag, forceCreation);
  }

  addDocumentMetaTags(tags: MetaDefinition[], forceCreation: boolean = false): void {
    this.meta.addTags(tags, forceCreation);
  }

  getDocumentMetaTag(attrSelector: string): HTMLMetaElement | null {
    return this.meta.getTag(attrSelector);
  }

  getDocumentMetaTags(attrSelector: string): HTMLMetaElement[] {
    return this.meta.getTags(attrSelector);
  }

  updateDocumentMetaTag(tag: MetaDefinition): void {
    this.meta.updateTag(tag);
  }

  removeDocumentMetaTag(attrSelector: string): void {
    this.meta.removeTag(attrSelector);
  }

  removeDocumentMetaTagElement(meta: HTMLMetaElement): void {
    this.meta.removeTagElement(meta);
  }
}
