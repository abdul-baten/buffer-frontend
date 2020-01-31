import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--post-edit-modal-form',
  styleUrls: ['./post-edit-modal-form.component.scss'],
  templateUrl: './post-edit-modal-form.component.html',
})
export class PostEditModalFormComponent implements OnChanges {
  @Input() postInfo: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.postInfo = changes.postInfo.currentValue;

    console.warn(this.postInfo);
  }
}
