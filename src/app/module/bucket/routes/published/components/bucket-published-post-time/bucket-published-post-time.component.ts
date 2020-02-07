import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published-post-time',
  templateUrl: './bucket-published-post-time.component.html',
  styleUrls: ['./bucket-published-post-time.component.scss'],
})
export class BucketPublishedPostTimeComponent implements OnChanges {
  @Input() calendarPostDateTime: string;

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostDateTime = changes.calendarPostDateTime.currentValue;
  }
}
