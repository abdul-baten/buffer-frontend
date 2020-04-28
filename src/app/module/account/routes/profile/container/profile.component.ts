import { ProfileFacade } from '../facade/profile.facade';
import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DocumentInterface } from '@core/model/document/document.model';
import { Observable } from 'rxjs';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnDestroy, OnInit {
  isWeb$: Observable<boolean>;

  private subscriptions$ = new SubSink();

  constructor(
    private activatedRoute: ActivatedRoute,
    private bucketScheduledFacade: ProfileFacade,
    private responsiveLayoutService: ResponsiveLayoutService,
  ) {
    this.isWeb$ = this.responsiveLayoutService.isWeb();
  }

  ngOnInit() {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((data: DocumentInterface) =>
        this.bucketScheduledFacade.setDocumentTitle(data.title),
      ),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
