import subMonths from 'date-fns/subMonths';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { FacebookFacade } from '../facade/analyze-facebook.facade';
import { I_INSIGHT } from '@core/model';
import { map, tap } from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'buffer--analyze-facebook',
  styleUrls: ['./analyze-facebook.component.scss'],
  templateUrl: './analyze-facebook.component.html',
})
export class AnalyzeFacebookComponent implements OnDestroy {
  dateRange: Date[] = [subMonths(new Date(), 1), new Date()];
  insight$: Observable<I_INSIGHT>;

  private subscriptions$ = new SubSink();

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookFacade, private router: Router) {
    this.subscriptions$.add(
      this.activatedRoute.paramMap
        .pipe(
          tap((params: ParamMap) => {
            const id = params.get('id');
            this.facade.getInsights({ id, dateRange: this.dateRange }).subscribe(noop);
            this.insight$ = this.facade.getInsightFromState(id).pipe(map((response: any) => response));
          }),
        )
        .subscribe(noop),
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  connectionSelected(connection: { id: string; type: string }): void {
    const { id, type } = connection;
    this.router.navigate(['analyze', type, id], { replaceUrl: true });
  }
}
