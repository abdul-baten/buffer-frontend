// Core Modules
import { Component, Input } from '@angular/core';

// Facades
import { ScheduleFacade } from '../../facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-post-create-modal-form-header',
  templateUrl: './schedule-post-create-modal-form-header.component.html',
  styleUrls: ['./schedule-post-create-modal-form-header.component.scss']
})
export class SchedulePostCreateModalFormHeaderComponent {
  @Input() formHeader = '';
  @Input() formHeaderIcon = '';

  constructor(private scheduleFacade: ScheduleFacade) {}

  onChooseTypeModalClosed(): void {
    this.scheduleFacade.setPostCreateModalObservable();
  }
}
