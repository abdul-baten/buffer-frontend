// Core Modules
import { Component } from '@angular/core';

// Facade
import { ScheduleFacade } from '@app/schedule/facade/schedule.facade';

@Component({
  selector: 'buffer--schedule-add-post-button',
  templateUrl: './schedule-add-post-button.component.html',
  styleUrls: ['./schedule-add-post-button.component.scss'],
})
export class ScheduleAddPostButtonComponent {
  constructor(private scheduleFacade: ScheduleFacade) {}

  onNewPostBtnClicked(): void {
    this.scheduleFacade.openCreatePostForm(new Date());
  }
}
