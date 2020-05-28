import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class DocumentResolver implements Resolve<void> {
  constructor(private readonly titleService: Title) {}

  resolve(activatedRoute: ActivatedRouteSnapshot) {
    this.titleService.setTitle(activatedRoute.data.title);
  }
}
