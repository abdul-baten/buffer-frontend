import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { I_CONNECTION } from '@core/model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { selectAllConnection } from 'src/app/selectors/connection.selector';
import { SocialProfileToolbarFacade } from '../facade/social-profile-toolbar.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buffer--social-profile-toolbar',
  templateUrl: './social-profile-toolbar.component.html',
  styleUrls: ['./social-profile-toolbar.component.scss'],
})
export class SocialProfileToolbarComponent implements OnInit {
  isWeb: Observable<boolean>;

  connections$: Observable<I_CONNECTION[]> = of([]);
  activeConnection$: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private socialProfileToolbarFacade: SocialProfileToolbarFacade,
    private store: Store<AppState>,
  ) {
    this.isWeb = this.socialProfileToolbarFacade.isWeb();
  }

  ngOnInit(): void {
    this.connections$ = this.store.select(selectAllConnection);
    this.activeConnection$ = this.activatedRoute.params.pipe(map((params: Params) => params.id));
  }

  trackByConnectionID(connection: I_CONNECTION): string {
    return connection._id;
  }
}
