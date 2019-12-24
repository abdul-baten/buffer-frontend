// Core
import { Component, OnInit } from '@angular/core';

// Application Specific
import { LandingFacade } from '../facade/landing.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'buffer--landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private landingFacade: LandingFacade) {
    const {
      data: { title }
    } = this.activatedRoute.snapshot;
    this.landingFacade.setDocumentTitle(title);
  }

  ngOnInit() {}
}
