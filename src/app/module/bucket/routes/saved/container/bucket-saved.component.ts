import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-saved',
  templateUrl: './bucket-saved.component.html',
  styleUrls: ['./bucket-saved.component.scss'],
})
export class BucketSavedComponent {}
