// Core Modules
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'buffer--menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateToSignupPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
