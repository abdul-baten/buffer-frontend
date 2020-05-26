import { Component, Inject } from '@angular/core';
import { I_POST } from '@core/model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'buffer--post-details-modal',
  styleUrls: ['./post-details-modal.component.scss'],
  templateUrl: './post-details-modal.component.html',
})
export class PostDetailsModalComponent {
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

  constructor(@Inject(MAT_DIALOG_DATA) public postData: I_POST) {
    this.postInfo = this.postData.extendedProps;
  }
}
