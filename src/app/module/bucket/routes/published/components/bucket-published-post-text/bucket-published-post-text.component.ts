import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published-post-text',
  templateUrl: './bucket-published-post-text.component.html',
  styleUrls: ['./bucket-published-post-text.component.scss'],
})
export class BucketPublishedPostTextComponent implements OnChanges {
  @Input() calendarPostCaption: string;

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostCaption = changes.calendarPostCaption.currentValue;
  }
}
