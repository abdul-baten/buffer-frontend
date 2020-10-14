import { Component, EventEmitter, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IConnection, IConnectionSelected } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { ToolbarFacade } from '../../facade/toolbar.facade';

@Component({
  selector: 'buffer-connections',
  styleUrls: ['./connections.component.css'],
  templateUrl: './connections.component.html'
})
export class ConnectionsComponent {
  @Output() selected_connection = new EventEmitter<IConnectionSelected>();
  active_connection$: Observable<string>;
  connections$: Observable<IConnection[]>;
  is_platform_web: Observable<boolean>;

  constructor (private readonly activatedRoute: ActivatedRoute, private readonly facade: ToolbarFacade) {
    this.is_platform_web = this.facade.isWeb();
    this.connections$ = this.facade.getConnections();
    this.active_connection$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id') as string));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  trackBy (_index: number, connection: IConnection): number {
    return Number(connection.id);
  }

  clicked (connection: IConnection): void {
    const { id, connection_type } = connection;
    const type = connection_type.split('_')[0].toLowerCase();

    this.selected_connection.emit({
      id,
      type
    });
  }
}
