// Core Modules
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Facade
import { LandingFacade } from '@app/landing/facade/landing.facade';

@Component({
  selector: 'buffer--landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private activatedRoute: ActivatedRoute, private landingFacade: LandingFacade) {
    const {
      data: { title },
    } = this.activatedRoute.snapshot;
    this.landingFacade.setDocumentTitle(title);
  }
}
