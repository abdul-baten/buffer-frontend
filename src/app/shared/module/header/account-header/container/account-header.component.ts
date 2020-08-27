import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--account-header',
  styleUrls: ['./account-header.component.scss'],
  templateUrl: './account-header.component.html',
})
export class AccountHeaderComponent implements OnChanges {
  @Input() accountHeader: string;

  constructor(private location: Location) {}

  ngOnChanges(changes: SimpleChanges) {
    this.accountHeader = changes.accountHeader.currentValue;
  }

  backClicked(): void {
    this.location.back();
  }
}
