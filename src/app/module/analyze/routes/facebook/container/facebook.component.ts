import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { FacebookFacade } from '../facade/facebook.facade';
import { IConnectionSelected, IFbInsight } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer-facebook',
  styleUrls: ['./facebook.component.css'],
  templateUrl: './facebook.component.html'
})
export class FacebookComponent {
  public insight$: Observable<IFbInsight>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.insight$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id') as string;

        return this.facade.getInsightFromState(id);
      }),
      shareReplay(1)
    );
  }

  public connectionSelected (connection: IConnectionSelected): void {
    console.warn(connection);

    const { id, type } = connection;

    this.facade.profileInsight(type as string, id);
  }
}
