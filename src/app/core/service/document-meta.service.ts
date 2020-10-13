import { Injectable } from '@angular/core';
import type { Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DocumentMetaService {
  constructor (private readonly meta: Meta) {}

  public addDocumentMetaTag (tag: MetaDefinition, force_creation: boolean = false): void {
    this.meta.addTag(tag, force_creation);
  }

  public addDocumentMetaTags (tags: MetaDefinition[], force_creation: boolean = false): void {
    this.meta.addTags(tags, force_creation);
  }

  public getDocumentMetaTag (attribute_selector: string): HTMLMetaElement | null {
    return this.meta.getTag(attribute_selector);
  }

  public getDocumentMetaTags (attribute_selector: string): HTMLMetaElement[] {
    return this.meta.getTags(attribute_selector);
  }

  public updateDocumentMetaTag (tag: MetaDefinition): void {
    this.meta.updateTag(tag);
  }

  public removeDocumentMetaTag (attribute_selector: string): void {
    this.meta.removeTag(attribute_selector);
  }

  public removeDocumentMetaTagElement (meta: HTMLMetaElement): void {
    this.meta.removeTagElement(meta);
  }
}
