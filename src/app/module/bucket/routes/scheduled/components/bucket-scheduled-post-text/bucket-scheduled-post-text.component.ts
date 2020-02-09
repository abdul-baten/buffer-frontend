import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-scheduled-post-text',
  templateUrl: './bucket-scheduled-post-text.component.html',
  styleUrls: ['./bucket-scheduled-post-text.component.scss'],
})
export class BucketScheduledPostTextComponent implements OnChanges {
  @Input() calendarPostCaption: string;

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostCaption = changes.calendarPostCaption.currentValue;
  }
}
