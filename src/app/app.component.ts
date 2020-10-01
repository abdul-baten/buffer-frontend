import { AppFacade } from './facade/app.facade';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'buffer--root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  private subscription$ = new Subscription();

  constructor(private readonly facade: AppFacade) {
    this.subscription$.add(this.facade.getData().subscribe());
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
