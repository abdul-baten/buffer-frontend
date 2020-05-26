import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DashboardFacade } from '@app/dashboard/facade/dashboard.facade';
import { I_DOCUMENT } from '@core/model';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardFacade: DashboardFacade,
    private authGuardService: AuthGuardService,
  ) {}

  ngOnInit() {
    this.authGuardService.canActivate();
    this.setTitle();
  }

  private setTitle(): void {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((documentData: I_DOCUMENT) =>
        this.dashboardFacade.setTitle(documentData.title),
      ),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
