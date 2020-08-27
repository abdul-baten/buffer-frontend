import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--connection-header',
  styleUrls: ['./connection-header.component.scss'],
  templateUrl: './connection-header.component.html',
})
export class ConnectionHeaderComponent implements OnChanges {
  @Input() headerTitle?: string;

  constructor(private readonly location: Location) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.headerTitle = changes.headerTitle.currentValue;
  }

  backClicked(): void {
    this.location.back();
  }
}
