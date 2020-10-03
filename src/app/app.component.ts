import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'buffer--root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isConnected: Observable<boolean>;

  constructor(private connectionService: ConnectionService) {
    this.isConnected = this.connectionService.monitor();
  }
}
