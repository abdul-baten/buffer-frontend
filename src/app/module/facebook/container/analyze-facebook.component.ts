import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { FacebookFacade } from '../facade/analyze-facebook.facade';
import { I_CONNECTION_SELECTED, I_INS_FB } from '@core/model';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--analyze-facebook',
  styleUrls: ['./analyze-facebook.component.scss'],
  templateUrl: './analyze-facebook.component.html',
})
export class AnalyzeFacebookComponent {
  insight$: Observable<I_INS_FB>;

  constructor(private activatedRoute: ActivatedRoute, private facade: FacebookFacade) {
    this.insight$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.facade.getInsightFromState(id).pipe(map((response: any) => response));
      }),
    );
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id, type } = connection;
    location.assign(`analyze/${type}/${id}`);
  }
}
