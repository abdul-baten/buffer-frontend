import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class DocumentResolver implements Resolve<Observable<string>> {
  constructor(private readonly titleService: Title) {}

  resolve(activatedRoute: ActivatedRouteSnapshot): Observable<string> {
    const { title } = activatedRoute.data;
    this.titleService.setTitle(`${title} - Buffer`);
    return of(title);
  }
}
