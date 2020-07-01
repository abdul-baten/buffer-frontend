import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SocialProfileAddFacade } from '../facade/social-profile-add.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--social-profile-add',
  styleUrls: ['./social-profile-add.component.scss'],
  templateUrl: './social-profile-add.component.html',
})
export class SocialProfileAddComponent implements OnDestroy, OnInit {
  activeConnectionID: string;
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private readonly socialProfileAddFacade: SocialProfileAddFacade) {}

  ngOnInit(): void {
    this.subscriptions$.add(
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.activeConnectionID = params.get('id');
      }),
    );
  }

  handleAddPostBtnClick(): void {
    this.socialProfileAddFacade.handleAddPostBtnClick(new Date(), this.activeConnectionID);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
