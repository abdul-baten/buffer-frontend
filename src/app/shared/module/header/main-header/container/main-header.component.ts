import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--main-header',
  styleUrls: ['./main-header.component.scss'],
  templateUrl: './main-header.component.html',
})
export class MainHeaderComponent {
  constructor(private router: Router) {}

  navigateToSignupPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
