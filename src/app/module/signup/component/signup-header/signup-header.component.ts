// Core Modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Application Specific Modules

// Third Party Modules

// Components

@Component({
  selector: 'buffer--signup-header',
  templateUrl: './signup-header.component.html',
  styleUrls: ['./signup-header.component.scss']
})
export class SignupHeaderComponent {
  constructor(private router: Router) {}

  navigateToSigninPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
