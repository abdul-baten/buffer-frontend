import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--main-logo',
  styleUrls: ['./main-logo.component.scss'],
  templateUrl: './main-logo.component.html',
})
export class MainLogoComponent {
  constructor(private router: Router) {}

  navigateToPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
