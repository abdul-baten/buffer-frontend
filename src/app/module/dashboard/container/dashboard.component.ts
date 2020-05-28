import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buffer--dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private authGuardService: AuthGuardService) {}

  ngOnInit() {
    this.authGuardService.canActivate();
  }
}
