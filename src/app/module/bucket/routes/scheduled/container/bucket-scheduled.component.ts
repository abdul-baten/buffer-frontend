import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-scheduled',
  templateUrl: './bucket-scheduled.component.html',
  styleUrls: ['./bucket-scheduled.component.scss'],
})
export class BucketScheduledComponent {}
