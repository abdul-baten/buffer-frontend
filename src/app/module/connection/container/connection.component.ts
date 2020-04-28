import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buffer--connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit {
  constructor(private authGuardService: AuthGuardService) {}

  ngOnInit() {
    this.authGuardService.canActivate();
  }
}
