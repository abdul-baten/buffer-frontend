import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, AfterViewInit, HostBinding, HostListener, OnDestroy } from '@angular/core';

import { fromEvent } from 'rxjs';
import { throttleTime, map, distinctUntilChanged, share, filter } from 'rxjs/operators';

import { SubSink } from 'subsink';

import { VisibilityState, Direction } from '../enum/header.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggleHeader', [
      state('void', style({ opacity: 0 })),
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, visibility: VisibilityState.Hidden, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, visibility: VisibilityState.Visible, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('100ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private isVisible = false;

  private subscriptions$: SubSink = new SubSink();

  constructor() {}

  @HostBinding('@toggleHeader')
  get toggleHeader(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(100),
      map(() => (window.pageYOffset > 550 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(filter(direction => direction === Direction.Up));
    const scrollDown$ = scroll$.pipe(filter(direction => direction === Direction.Down));

    this.subscriptions$.add(
      scrollUp$.subscribe(() => (this.isVisible = true)),
      scrollDown$.subscribe(() => (this.isVisible = false))
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
