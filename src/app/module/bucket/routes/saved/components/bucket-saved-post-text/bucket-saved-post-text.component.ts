import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-saved-post-text',
  templateUrl: './bucket-saved-post-text.component.html',
  styleUrls: ['./bucket-saved-post-text.component.scss'],
})
export class BucketSavedPostTextComponent implements OnChanges {
  @Input() calendarPostCaption: string;

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostCaption = changes.calendarPostCaption.currentValue;
  }
}
