import { Injectable } from '@angular/core';
import type { GlobalService } from 'src/app/core/service';

@Injectable()
export class PlanPricingFacade {
  constructor (private readonly globalService: GlobalService) {}

  public getElement (element_id: string): HTMLElement {
    return this.globalService.getElement(element_id);
  }
}
