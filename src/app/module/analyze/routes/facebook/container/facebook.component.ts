import { Component } from '@angular/core';
import { shareReplay, switchMap } from 'rxjs/operators';
import type { ActivatedRoute, ParamMap } from '@angular/router';
import type { FacebookFacade } from '../facade/facebook.facade';
import type { IConnectionSelected, IFbInsight } from 'src/app/core/model';
import type { Observable } from 'rxjs';

@Component({
  selector: 'buffer-facebook',
  styleUrls: ['./facebook.component.css'],
  templateUrl: './facebook.component.html'
})
export class FacebookComponent {
  insight$: Observable<IFbInsight>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.insight$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id') as string;

        return this.facade.getInsightFromState(id);
      }),
      shareReplay(1)
    );
  }

  connectionSelected (connection: IConnectionSelected): void {
    const { id, type } = connection;

    this.facade.profileInsight(type as string, id);
  }
}
