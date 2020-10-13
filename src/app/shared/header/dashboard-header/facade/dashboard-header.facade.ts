import format from 'date-fns/format';
import { AppState } from 'src/app/reducers';
import { ConnectionService, GlobalService, ModalService } from 'src/app/core/service';
import { DashboardHeaderService } from '../service/dashboard-header.service';
import { IConnection } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { removeNewPostData } from 'src/app/actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class DashboardHeaderFacade {
  constructor(
    private readonly connectionService: ConnectionService,
    private readonly dashboardHeaderService: DashboardHeaderService,
    private readonly globalService: GlobalService,
    private readonly modalService: ModalService,
    private readonly router: Router,
    private store: Store<AppState>,
  ) {}

  getFirstConnection(): Observable<{ id: string; type: string }> {
    return this.connectionService.getFirstConnection().pipe(
      map((connection: IConnection) => {
        const { id, connection_type } = connection;
        const type = connection_type.split('_')[0].toLowerCase();

        return { id, type };
      }),
    );
  }

  logoutUser(): void {
    this.dashboardHeaderService.logoutUser().subscribe(() => this.globalService.getLocation().reload());
  }

  newPost(postScheduleDateTime: Date): void {
    const dialogRef = this.modalService.openPostModal('Create Post', {
      postScheduleDateTime: format(new Date(postScheduleDateTime), `yyyy-MM-dd'T'HH:mm:ssxxx`),
    });

    dialogRef.onClose.subscribe(() => {
      this.store.dispatch(removeNewPostData());
    });
  }

  navigate(route: [string]): void {
    this.router.navigate(route);
  }

  replaceRoute(route: string): void {
    this.globalService.getLocation().href = route;
  }
}
