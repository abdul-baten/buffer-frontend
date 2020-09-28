import { AppFacade } from './facade/app.facade';
import { Component } from '@angular/core';

@Component({
  selector: 'buffer--root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly facade: AppFacade) {
    this.facade.getData().subscribe();
  }
}
