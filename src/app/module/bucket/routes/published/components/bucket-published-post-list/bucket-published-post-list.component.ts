import { CalPostInterface } from '@core/model/post/schedule.model';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-published-post-list',
  templateUrl: './bucket-published-post-list.component.html',
  styleUrls: ['./bucket-published-post-list.component.scss'],
})
export class BucketPublishedPostListComponent implements OnChanges {
  @Input() calendarPost: CalPostInterface;

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

  ngOnChanges(changes: SimpleChanges) {
    this.calendarPost = changes.calendarPost.currentValue;
  }
}
