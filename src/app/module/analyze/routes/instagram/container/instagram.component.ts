import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component } from '@angular/core';
import { I_CONNECTION_SELECTED, I_INS_IG } from 'src/app/core/model';
import { InstagramFacade } from '../facade/instagram.facade';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--instagram',
  styleUrls: ['./instagram.component.css'],
  templateUrl: './instagram.component.html',
})
export class AnalyzeInstagramComponent {
  insight$: Observable<I_INS_IG>;

  constructor(private activatedRoute: ActivatedRoute, private facade: InstagramFacade, private readonly router: Router) {
    this.insight$ = this.activatedRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        const id = param.get('id') as string;
        return this.facade.getInsightFromState(id).pipe(map((response: any) => response));
      }),
    );
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id, type } = connection;
    this.router.navigate(['analyze', type, id]);
  }
}
