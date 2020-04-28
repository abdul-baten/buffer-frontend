import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buffer--account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(private authGuardService: AuthGuardService) {}

  ngOnInit() {
    this.authGuardService.canActivate();
  }
}
