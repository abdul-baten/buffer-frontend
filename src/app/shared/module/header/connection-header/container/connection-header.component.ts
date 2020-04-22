import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'buffer--connection-header',
  templateUrl: './connection-header.component.html',
  styleUrls: ['./connection-header.component.scss'],
})
export class ConnectionHeaderComponent implements OnChanges {
  @Input() headerTitle?: string;

  ngOnChanges(changes: SimpleChanges) {
    this.headerTitle = changes.headerTitle.currentValue;
  }
}
