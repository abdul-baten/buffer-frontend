// Core Modules
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'buffer--menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateToSignupPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
