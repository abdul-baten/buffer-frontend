import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I_CONNECTION } from '@core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-saved-post-social',
  templateUrl: './bucket-saved-post-social.component.html',
  styleUrls: ['./bucket-saved-post-social.component.scss'],
})
export class BucketSavedPostSocialComponent implements OnChanges {
  @Input() calendarPostSocialAccounts: I_CONNECTION[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostSocialAccounts = changes.calendarPostSocialAccounts.currentValue;
  }
}
