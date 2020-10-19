import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FacebookGroupFacade } from '../facade/facebook-group.facade';
import { IConnection } from 'src/app/core/model';

@Component({
  selector: 'buffer-facebook-group',
  styleUrls: ['./facebook-group.component.css'],
  templateUrl: './facebook-group.component.html'
})
export class FacebookGroupComponent implements OnDestroy {
  private subscription$ = new Subscription();
  public connections$: Observable<IConnection[]>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: FacebookGroupFacade) {
    this.connections$ = this.facade.getGroups(this.activatedRoute.queryParamMap, 'facebook-group');
  }

  public addGroup (group_info: IConnection): void {
    this.subscription$.add(this.facade.addGroup(group_info).subscribe(() => this.facade.navigate('connection/profiles')));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public trackBy (_index: number, connection: IConnection): number {
    return Number(connection.connection_id);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
