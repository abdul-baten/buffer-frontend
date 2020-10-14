import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  is_online: Observable<boolean>;

  constructor (private readonly connectionService: ConnectionService) {
    this.is_online = this.connectionService.monitor();
  }
}
