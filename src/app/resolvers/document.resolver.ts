import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import type { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DocumentResolver implements Resolve<Observable<string>> {
  constructor (private readonly titleService: Title) {}

  public resolve (activated_route: ActivatedRouteSnapshot): Observable<string> {
    const { title } = activated_route.data;

    this.titleService.setTitle(`${title} - Buffer`);

    return of(title);
  }
}
