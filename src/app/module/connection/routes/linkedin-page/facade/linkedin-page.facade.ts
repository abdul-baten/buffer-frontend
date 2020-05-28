import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LinkedInPageFacade {
  constructor(private router: Router) {}

  navigateToPage(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }
}
