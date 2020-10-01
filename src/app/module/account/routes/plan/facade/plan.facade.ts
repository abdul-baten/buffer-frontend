import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/service';

@Injectable()
export class PlanFacade {
  constructor(private readonly globalService: GlobalService) {}

  getElement(elementID: string): HTMLElement {
    return this.globalService.getElement(elementID);
  }
}
