import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { FacebookFacade } from '../facade/facebook.facade';
import { I_CONNECTION_SELECTED, I_INS_FB } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer--facebook',
  styleUrls: ['./facebook.component.css'],
  templateUrl: './facebook.component.html',
})
export class FacebookComponent {
  insight$: Observable<I_INS_FB>;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    this.insight$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id') as string;
        return this.facade.getInsightFromState(id);
      }),
      shareReplay(1),
    );
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id, type } = connection;
    this.facade.profileInsight(type as string, id);
  }
}
