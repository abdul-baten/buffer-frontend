// Core Modules
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
})
export class LogoIconComponent {
  constructor(private router: Router) {}

  navigateToPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
