import { Component } from '@angular/core';

@Component({
  selector: 'buffer--schedule-calendar-post-details-modal',
  styleUrls: ['./schedule-calendar-post-details-modal.component.scss'],
  templateUrl: './schedule-calendar-post-details-modal.component.html',
})
export class ScheduleCalendarPostDetailsModalComponent {
  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
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
}
