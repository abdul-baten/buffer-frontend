import { ActivatedRoute } from '@angular/router';
import { AnalyzeFacade } from '@app/analyze/facade/analyze.facade';
import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { I_DOCUMENT } from '@core/model';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(
    private activatedRoute: ActivatedRoute,
    private analyzeFacade: AnalyzeFacade,
    private authGuardService: AuthGuardService,
  ) {}

  ngOnInit() {
    this.authGuardService.canActivate();
    this.setTitle();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private setTitle(): void {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((documentInfo: I_DOCUMENT) => this.analyzeFacade.setTitle(documentInfo.title)),
    );
  }
}
