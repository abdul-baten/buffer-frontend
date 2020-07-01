import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '@core/service/connection/connection.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--connection-plan-sidebar',
  styleUrls: ['./connection-plan-sidebar.component.scss'],
  templateUrl: './connection-plan-sidebar.component.html',
})
export class ConnectionPlanSidebarComponent implements OnInit {
  addedConnections$: Observable<number>;

  constructor(private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.addedConnections$ = this.connectionService.count$;
  }
}
