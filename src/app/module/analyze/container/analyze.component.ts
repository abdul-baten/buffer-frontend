import { ActivatedRoute } from '@angular/router';
import { AnalyzeFacade } from '@app/analyze/facade/analyze.facade';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DocumentInterface } from '@core/model/document/document.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent implements OnDestroy, OnInit {
  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private analyzeFacade: AnalyzeFacade) {}

  ngOnInit() {
    this.setTitle();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  private setTitle(): void {
    this.subscriptions$.add(
      this.activatedRoute.data.subscribe((documentInfo: DocumentInterface) =>
        this.analyzeFacade.setTitle(documentInfo.title),
      ),
    );
  }
}
