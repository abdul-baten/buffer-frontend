// Core Modules
import { Component, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--no-data-found',
  styleUrls: ['./no-data-found.component.scss'],
  templateUrl: './no-data-found.component.html',
})
export class NoDataFoundComponent implements OnChanges {
  @Input() noDataFoundIcon = '';

  ngOnChanges(changes: SimpleChanges) {
    this.noDataFoundIcon = changes.noDataFoundIcon.currentValue;
  }
}
