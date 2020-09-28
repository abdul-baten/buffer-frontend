import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component } from '@angular/core';
import { InstagramFacade } from '../facade/instagram.facade';
import { I_CONNECTION_SELECTED, I_INS_IG } from '@core/model';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--instagram',
  styleUrls: ['./instagram.component.scss'],
  templateUrl: './instagram.component.html',
})
export class AnalyzeInstagramComponent {
  insight$: Observable<I_INS_IG>;

  constructor(private activatedRoute: ActivatedRoute, private facade: InstagramFacade, private router: Router) {
    this.insight$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.facade.getInsightFromState(id).pipe(map((response: any) => response));
      }),
    );
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id, type } = connection;
    this.router.navigate(['analyze', type, id]);
  }
}
