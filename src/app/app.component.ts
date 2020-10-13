import { Component } from '@angular/core';
import type { ConnectionService } from 'ng-connection-service';
import type { Observable } from 'rxjs';

@Component({
  selector: 'bufferRoot',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  is_online: Observable<boolean>;

  constructor (private readonly connectionService: ConnectionService) {
    this.is_online = this.connectionService.monitor();
  }
}
