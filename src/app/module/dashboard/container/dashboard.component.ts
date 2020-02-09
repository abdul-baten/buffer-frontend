import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DashboardFacade } from '@app/dashboard/facade/dashboard.facade';
import { DocumentInterface } from '@core/model/document/document.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private dashboardFacade: DashboardFacade) {}

  ngOnInit() {
    this.setTitle();
  }

  private setTitle(): void {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((documentData: DocumentInterface) =>
        this.dashboardFacade.setTitle(documentData.title),
      ),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
