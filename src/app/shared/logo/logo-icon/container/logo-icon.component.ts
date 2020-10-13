import { Component } from '@angular/core';
import type { Router } from '@angular/router';

@Component({
  selector: 'buffer-logo-icon',
  styleUrls: ['./logo-icon.component.css'],
  templateUrl: './logo-icon.component.html'
})
export class LogoIconComponent {
  constructor (private readonly router: Router) {}

  public navigateToPage (page: string): void {
    this.router.navigateByUrl(page);
  }
}
