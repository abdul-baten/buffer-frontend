import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/core/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--connection-plan-sidebar',
  styleUrls: ['./connection-plan-sidebar.component.css'],
  templateUrl: './connection-plan-sidebar.component.html',
})
export class ConnectionPlanSidebarComponent implements OnInit {
  addedConnections$: Observable<number>;

  constructor(private readonly connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.addedConnections$ = this.connectionService.count$;
  }
}
