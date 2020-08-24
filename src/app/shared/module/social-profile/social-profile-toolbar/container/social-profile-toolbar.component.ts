import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocialProfileToolbarFacade } from '../facade/social-profile-toolbar.facade';

@Component({
  selector: 'buffer--social-profile-toolbar',
  styleUrls: ['./social-profile-toolbar.component.scss'],
  templateUrl: './social-profile-toolbar.component.html',
})
export class SocialProfileToolbarComponent implements OnInit {
  isWeb: Observable<boolean>;

  connections$: Observable<I_CONNECTION[]>;
  activeConnection$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute, private readonly socialProfileToolbarFacade: SocialProfileToolbarFacade) {
    this.isWeb = this.socialProfileToolbarFacade.isWeb();
  }

  ngOnInit(): void {
    this.connections$ = this.socialProfileToolbarFacade.getConnections();
    this.activeConnection$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id')));
  }

  trackByConnectionID(connection: I_CONNECTION): string {
    return connection.id;
  }
}
