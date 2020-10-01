import subDays from 'date-fns/subDays';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { FacebookFacade } from '../facade/analyze-facebook.facade';
import { I_CONNECTION_SELECTED, I_INS_FB } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'buffer--analyze-facebook',
  styleUrls: ['./analyze-facebook.component.css'],
  templateUrl: './analyze-facebook.component.html',
})
export class AnalyzeFacebookComponent {
  insight$: Observable<I_INS_FB>;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookFacade) {
    const dateRange = [this.facade.formatDate(subDays(new Date(), 6)), this.facade.formatDate(new Date())];

    this.insight$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.facade.getInsights({ id, dateRange });
      }),
    );
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id, type } = connection;
    this.facade.profileInsight(type, id);
  }
}
