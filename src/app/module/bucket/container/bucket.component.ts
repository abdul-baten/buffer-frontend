import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buffer--bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent implements OnInit {
  constructor(private authGuardService: AuthGuardService) {}

  ngOnInit() {
    this.authGuardService.canActivate();
  }
}
