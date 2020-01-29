// Core Modules
import { Component, Input } from '@angular/core';

@Component({
  selector: 'buffer--post-details-modal-time',
  templateUrl: './post-details-modal-time.component.html',
  styleUrls: ['./post-details-modal-time.component.scss'],
})
export class PostDetailsModalTimeComponent {
  @Input() postDateAndTime: Date;
}
