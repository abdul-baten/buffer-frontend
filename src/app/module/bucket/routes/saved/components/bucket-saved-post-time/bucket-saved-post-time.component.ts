import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-saved-post-time',
  templateUrl: './bucket-saved-post-time.component.html',
  styleUrls: ['./bucket-saved-post-time.component.scss'],
})
export class BucketSavedPostTimeComponent implements OnChanges {
  @Input() calendarPostDateTime: string;

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostDateTime = changes.calendarPostDateTime.currentValue;
  }
}
