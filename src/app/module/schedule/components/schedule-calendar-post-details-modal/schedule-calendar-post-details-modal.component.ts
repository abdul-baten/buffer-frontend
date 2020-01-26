import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalPostInterface } from '@app/schedule/model/schedule.model';

@Component({
  selector: 'buffer--schedule-calendar-post-details-modal',
  styleUrls: ['./schedule-calendar-post-details-modal.component.scss'],
  templateUrl: './schedule-calendar-post-details-modal.component.html',
})
export class ScheduleCalendarPostDetailsModalComponent {
  postInfo: any;

  slideConfig = {
    arrows: true,
    centerMode: false,
    dots: false,
    draggable: true,
    infinite: false,
    nextArrow: '<i class="material-icons slick-next">keyboard_arrow_right</i>',
    prevArrow: '<i class="material-icons slick-prev">keyboard_arrow_left</i>',
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: false,
  };

  constructor(@Inject(MAT_DIALOG_DATA) public postData: CalPostInterface) {
    this.postInfo = this.postData.extendedProps;
  }
}
