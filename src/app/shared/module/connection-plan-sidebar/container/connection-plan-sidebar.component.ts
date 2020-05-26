import { AppState } from 'src/app/reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectConnectionLength } from 'src/app/selectors/connection.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buffer--connection-plan-sidebar',
  styleUrls: ['./connection-plan-sidebar.component.scss'],
  templateUrl: './connection-plan-sidebar.component.html',
})
export class ConnectionPlanSidebarComponent implements OnInit {
  addedConnections$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.addedConnections$ = this.store.select(selectConnectionLength);
  }
}
