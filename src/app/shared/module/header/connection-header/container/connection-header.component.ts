import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--connection-header',
  styleUrls: ['./connection-header.component.scss'],
  templateUrl: './connection-header.component.html',
})
export class ConnectionHeaderComponent implements OnChanges {
  @Input() headerTitle?: string;

  ngOnChanges(changes: SimpleChanges) {
    this.headerTitle = changes.headerTitle.currentValue;
  }
}
