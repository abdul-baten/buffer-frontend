import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TwitterFacade {
  constructor(private router: Router) {}

  navigateToPage(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }
}
