import dayJs from 'dayjs';
import { ConnectionService, GlobalService, ModalService } from 'src/app/core/service';
import { IConnection } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class DashboardHeaderFacade {
  constructor (
    private readonly connectionService: ConnectionService,
    private readonly globalService: GlobalService,
    private readonly modalService: ModalService,
    private readonly router: Router
  ) {}

  getFirstConnection (): Observable<{ id: string; type: string }> {
    return this.connectionService.getFirstConnection().pipe(map((connection: IConnection) => {
      const { id, connection_type } = connection;
      const type = connection_type.split('_')[0].toLowerCase();

      return {
        id,
        type
      };
    }));
  }

  newPost (post_date_time: Date): void {
    // TODO
    this.modalService.openPostModal({
      post_date_time: dayJs(post_date_time).format('YYYY-MM-DDTHH:mm:ssZ[Z]')
    });
  }

  navigate (route: [string]): void {
    this.router.navigate(route);
  }

  replaceRoute (route: string): void {
    this.globalService.getLocation().href = route;
  }
}
