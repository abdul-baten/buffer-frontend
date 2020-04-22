import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FacebookGroupFacade } from '../facade/facebook-group.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--app-facebook-group',
  templateUrl: './facebook-group.component.html',
  styleUrls: ['./facebook-group.component.scss'],
})
export class FacebookGroupComponent implements OnDestroy, OnInit {
  // ngOnInit() {
  //   this.router.queryParams.subscribe((params: { code: string }) => {
  //     const { code } = params;
  //     console.warn(code);

  //     if (code) {
  //       this.http
  //         .get('https://localhost:3000/api/v1.0.0/social-profile/getGroups', { params: { code } })
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

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookGroupFacade) {}

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
