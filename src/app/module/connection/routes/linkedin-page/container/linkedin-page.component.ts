import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LinkedInPageFacade } from '../facade/linkedin-page.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--connection-linkedin-page',
  templateUrl: './linkedin-page.component.html',
  styleUrls: ['./linkedin-page.component.scss'],
})
export class LinkedInPageComponent implements OnDestroy, OnInit {
  // ngOnInit() {
  //   this.router.queryParams.subscribe((params: { code: string }) => {
  //     const { code } = params;
  //     console.warn(code);

  //     if (code) {
  //       this.http
  //         .get('https://localhost:3000/api/v1.0.0/social-profile/getPages', { params: { code } })
  //         .subscribe((resp: any) => {
  //           console.warn(resp);
  //         });
  //     }
  //   });
  // }

  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 72;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: LinkedInPageFacade) {}

  ngOnInit(): void {
    this.setDocumentTitle();
  }

  private setDocumentTitle(): void {
    this.subscriptions$.add(this.facade.setDocumentTitle(this.activatedRoute));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
