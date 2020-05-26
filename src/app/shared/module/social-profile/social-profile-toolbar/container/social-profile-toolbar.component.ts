import { ActivatedRoute, Params } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { I_CONNECTION } from '@core/model';
import { map } from 'rxjs/operators';
import { NgxTippyProps } from 'ngx-tippy-wrapper';
import { Observable, of } from 'rxjs';
import { Placement } from 'tippy.js';
import { selectAllConnection } from 'src/app/selectors/connection.selector';
import { SocialProfileToolbarFacade } from '../facade/social-profile-toolbar.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buffer--social-profile-toolbar',
  templateUrl: './social-profile-toolbar.component.html',
  styleUrls: ['./social-profile-toolbar.component.scss'],
})
export class SocialProfileToolbarComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    this.connections$ = this.store.select(selectAllConnection);
    this.activeConnection$ = this.activatedRoute.params.pipe(map((params: Params) => params.id));
  }

  trackByConnectionID(connection: I_CONNECTION): string {
    return connection._id;
  }

  tooltipProps(tooltipContent: string, tooltipPlacement: Placement): NgxTippyProps {
    return {
      arrow: true,
      placement: tooltipPlacement,
      content: tooltipContent,
      animation: 'shift-toward-subtle',
    };
  }
}
