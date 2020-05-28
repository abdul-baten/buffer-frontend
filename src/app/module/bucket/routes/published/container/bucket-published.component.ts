import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published',
  templateUrl: './bucket-published.component.html',
  styleUrls: ['./bucket-published.component.scss'],
})
export class BucketPublishedComponent {}
