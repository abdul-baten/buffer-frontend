// Core Modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--signin-header',
  templateUrl: './signin-header.component.html',
  styleUrls: ['./signin-header.component.scss']
})
export class SigninHeaderComponent {
  constructor(private router: Router) {}

  navigateToSigninPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
