import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { EConnectionType, EPostStatus, EPostType } from 'src/app/core/enum';
import { Observable, of } from 'rxjs';
import { IDropdown, IPost } from 'src/app/core/model';
import { Table } from 'primeng/table';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-bucket-published',
  styleUrls: ['./bucket-published.component.css'],
  templateUrl: './bucket-published.component.html'
})
export class BucketPublishedComponent {
  @ViewChild('post_table', { read: Table }) post_table!: Table;

  connection_items: IDropdown[] = [];
  post_type = EPostType;
  post_types: IDropdown[] = [];

  calendar_posts: Observable<IPost[]> = of([
    {
      allDay: false,
      editable: true,
      hasEnd: false,
      id: '100',
      overlap: true,
      post_connection_id: '',
      post_connection_type: EConnectionType.FACEBOOK_PAGE,
      post_date_time: new Date('2020-01-05'),
      post_media: [],
      post_message: '',
      post_status: EPostStatus.SCHEDULE,
      post_type: EPostType.IMAGE,
      post_user_id: '',
      start: '2020-08-07T20:30:00',
      title: ''
    }
  ]);

  splitConnectionType (type: EConnectionType | EPostType): string {
    return type.split('_').join(' ');
  }

  inputChanged (input: string): void {
    this.post_table.filterGlobal(input, 'contains');
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  dropdownChanged (data: { dataText: string; propertyName: string; comparison: string }): void {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { dataText, propertyName, comparison } = data;

    this.post_table.filter(dataText, propertyName, comparison);
  }
}
