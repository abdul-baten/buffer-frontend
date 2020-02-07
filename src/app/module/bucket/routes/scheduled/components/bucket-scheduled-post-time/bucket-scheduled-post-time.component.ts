import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-scheduled-post-time',
  templateUrl: './bucket-scheduled-post-time.component.html',
  styleUrls: ['./bucket-scheduled-post-time.component.scss'],
})
export class BucketScheduledPostTimeComponent implements OnChanges {
  @Input() calendarPostDateTime: string;

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostDateTime = changes.calendarPostDateTime.currentValue;
  }
}
