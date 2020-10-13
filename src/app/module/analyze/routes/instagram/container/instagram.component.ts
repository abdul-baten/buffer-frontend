import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import type { ActivatedRoute, ParamMap, Router } from '@angular/router';
import type { IConnectionSelected, IInstaInsight } from 'src/app/core/model';
import type { InstagramFacade } from '../facade/instagram.facade';
import type { Observable } from 'rxjs';

@Component({
  selector: 'buffer-instagram',
  styleUrls: ['./instagram.component.css'],
  templateUrl: './instagram.component.html'
})
export class AnalyzeInstagramComponent {
  insight$: Observable<IInstaInsight>;

  constructor (private activatedRoute: ActivatedRoute, private readonly facade: InstagramFacade, private readonly router: Router) {
    this.insight$ = this.activatedRoute.paramMap.pipe(switchMap((param: ParamMap) => {
      const id = param.get('id') as string;

      return this.facade.getInsightFromState(id).pipe(map((response: IInstaInsight) => response));
    }));
  }

  connectionSelected (connection: IConnectionSelected): void {
    const { id, type } = connection;

    this.router.navigate(['analyze', type, id]);
  }
}
