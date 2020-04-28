import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FacebookPageFacade } from '../facade/facebook-page.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--app-facebook-page',
  templateUrl: './facebook-page.component.html',
  styleUrls: ['./facebook-page.component.scss'],
})
export class FacebookPageComponent implements OnDestroy, OnInit {
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

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookPageFacade) {}

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
