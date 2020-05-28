import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ChooseConnectionFacade {
  constructor(private readonly router: Router) {}

  navigateToPage(pageToNavigate: string): void {
    this.router.navigate([pageToNavigate]);
  }
}
