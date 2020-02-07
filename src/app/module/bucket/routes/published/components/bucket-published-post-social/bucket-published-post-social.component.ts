import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SocialProfileInterface } from '@core/model/post/schedule.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published-post-social',
  templateUrl: './bucket-published-post-social.component.html',
  styleUrls: ['./bucket-published-post-social.component.scss'],
})
export class BucketPublishedPostSocialComponent implements OnChanges {
  @Input() calendarPostSocialAccounts: SocialProfileInterface[];

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPostSocialAccounts = changes.calendarPostSocialAccounts.currentValue;
  }
}
