import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DocumentTitleService {
  constructor(private title: Title) {}

  setDocumentTitle(titleString: string): void {
    this.title.setTitle(titleString);
  }
}
