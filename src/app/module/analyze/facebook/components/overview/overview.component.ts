import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { EFbInsightType } from 'src/app/core/enum';
import { FacebookFacade } from '../../facade/facebook.facade';
import { IConnectionSelected, IFbOverviewInsight } from 'src/app/core/model';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer-overview',
  styleUrls: ['./overview.component.css'],
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  public active_connection_id$: Observable<string>;
  public insight_type = EFbInsightType.OVERVIEW;
  public overview$: Observable<IFbOverviewInsight>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.active_connection_id$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') as string));
    this.overview$ = this.active_connection_id$.pipe(
      switchMap((id: string) => this.facade.getInsightFromState<IFbOverviewInsight>(id, this.insight_type)),
      shareReplay(1)
    );
  }

  public connectionSelected (connection: IConnectionSelected): void {
    const { id, type } = connection;

    this.facade.profileInsight(type as string, id);
  }
}
