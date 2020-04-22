import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LinkedInProfileFacade } from '../facade/linkedin-profile.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--connection-linkedin-profile',
  templateUrl: './linkedin-profile.component.html',
  styleUrls: ['./linkedin-profile.component.scss'],
})
export class LinkedInProfileComponent implements OnDestroy, OnInit {
  // ngOnInit() {
  //   this.router.queryParams.subscribe((params: { code: string }) => {
  //     const { code } = params;
  //     console.warn(code);

  //     if (code) {
  //       this.http
  //         .get('https://localhost:3000/api/v1.0.0/social-profile/getProfiles', { params: { code } })
  //         .subscribe((resp: any) => {
  //           console.warn(resp);
  //         });
  //     }
  //   });
  // }

  matSideNavFixedInViewport = true;
  matSideNavFixedTopGap = 80;
  matSideNavMode = 'side';
  matSideNavPosition = 'end';

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: LinkedInProfileFacade) {}

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
