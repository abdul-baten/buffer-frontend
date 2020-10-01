import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { I_CONNECTION, I_CONNECTION_SELECTED } from 'src/app/core/model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToolbarFacade } from '../../facade/toolbar.facade';

@Component({
  selector: 'buffer--connections',
  styleUrls: ['./connections.component.css'],
  templateUrl: './connections.component.html',
})
export class ConnectionsComponent implements OnInit {
  @Output() connectionSelected = new EventEmitter<I_CONNECTION_SELECTED>();
  isWeb: Observable<boolean>;

  connections$: Observable<I_CONNECTION[]>;
  activeConnection$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute, private readonly facade: ToolbarFacade) {
    this.isWeb = this.facade.isWeb();
  }

  ngOnInit(): void {
    this.connections$ = this.facade.getConnections();
    this.activeConnection$ = this.activatedRoute.paramMap.pipe(map((params: ParamMap) => params.get('id')));
  }

  trackByConnectionID(connection: I_CONNECTION): string {
    return connection.id;
  }

  clicked(connection: I_CONNECTION): void {
    const { id, connectionType } = connection;
    const type = connectionType.split('_')[0].toLowerCase();
    this.connectionSelected.emit({ id, type });
  }
}
