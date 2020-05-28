import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LinkedInProfileFacade {
  constructor(private readonly router: Router) {}

  navigateToProfile(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }
}
