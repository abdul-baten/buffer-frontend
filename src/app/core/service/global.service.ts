import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public getWindow(): Window {
    return this.document.defaultView as Window;
  }

  public getLocation(): Location {
    return this.document.location;
  }

  public createElement(tag: string): HTMLElement {
    return this.document.createElement(tag);
  }

  public getElement(elementID: string): HTMLElement {
    return this.document.getElementById(elementID) as HTMLElement;
  }

  public getQuerySelector(className: string): HTMLElement {
    return this.document.querySelector(className) as HTMLElement;
  }
}
