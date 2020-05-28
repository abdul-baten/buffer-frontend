import { AuthGuardService } from '@core/service/auth-guard/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buffer--analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss'],
})
export class AnalyzeComponent implements OnInit {
  constructor(private readonly authGuardService: AuthGuardService) {}

  ngOnInit() {
    this.authGuardService.canActivate();
  }
}
