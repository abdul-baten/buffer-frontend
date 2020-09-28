import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FacebookFacade } from '../facade/analyze-facebook.facade';
import { I_CONNECTION_SELECTED, I_INS_FB } from '@core/model';
import { finalize, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ModalService } from '@core/service/modal/modal.service';

@Component({
  selector: 'buffer--analyze-facebook',
  styleUrls: ['./analyze-facebook.component.scss'],
  templateUrl: './analyze-facebook.component.html',
})
export class AnalyzeFacebookComponent {
  insight$: Observable<I_INS_FB>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private facade: FacebookFacade,
    private router: Router,
    private notificationService: ModalService,
  ) {
    const a = this.notificationService.openLoader();
    this.insight$ = a.pipe(
      switchMap((ref: any) => {
        return this.activatedRoute.paramMap.pipe(
          switchMap((params: ParamMap) => {
            const id = params.get('id');
            return this.facade.getInsightFromState(id).pipe(map((response: any) => response));
          }),
          finalize(() => this.notificationService.closeLoader(ref)),
        );
      }),
    );
  }

  connectionSelected(connection: I_CONNECTION_SELECTED): void {
    const { id, type } = connection;
    this.router.navigate(['analyze', type, id]);
  }
}
