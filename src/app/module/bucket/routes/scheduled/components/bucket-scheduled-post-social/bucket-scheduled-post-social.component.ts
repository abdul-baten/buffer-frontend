import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_CONNECTION } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-scheduled-post-social',
  templateUrl: './bucket-scheduled-post-social.component.html',
  styleUrls: ['./bucket-scheduled-post-social.component.scss'],
})
export class BucketScheduledPostSocialComponent implements OnChanges {
  @Input() calendarPostSocialAccounts: I_CONNECTION[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostSocialAccounts = changes.calendarPostSocialAccounts.currentValue;
  }
}
