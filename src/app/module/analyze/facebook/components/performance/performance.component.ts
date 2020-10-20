import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { EFbInsightType } from 'src/app/core/enum';
import { FacebookFacade } from '../../facade/facebook.facade';
import { IConnectionSelected, IFbPerformanceInsight } from 'src/app/core/model';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer-performance',
  styleUrls: ['./performance.component.css'],
  templateUrl: './performance.component.html'
})
export class PerformanceComponent {
  public active_connection_id$: Observable<string>;
  public insight_type = EFbInsightType.PERFORMANCE;
  public performance$: Observable<IFbPerformanceInsight>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.active_connection_id$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') as string));
    this.performance$ = this.active_connection_id$.pipe(
      switchMap((id: string) => this.facade.getInsightFromState<IFbPerformanceInsight>(id, this.insight_type)),
      shareReplay(1)
    );
  }

  public connectionSelected (connection: IConnectionSelected): void {
    const { id, type } = connection;

    this.facade.profileInsight(type as string, id);
  }
}
