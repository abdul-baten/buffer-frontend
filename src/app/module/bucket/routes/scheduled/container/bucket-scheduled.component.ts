import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { EConnectionType, EPostStatus, EPostType } from 'src/app/core/enum';
import { Observable, of } from 'rxjs';
import { IDropdown, IPost } from 'src/app/core/model';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-bucket-scheduled',
  styleUrls: ['./bucket-scheduled.component.css'],
  templateUrl: './bucket-scheduled.component.html'
})
export class BucketScheduledComponent {
  @ViewChild('post_table', { read: Table }) post_table!: Table;

  public connection_items: IDropdown[] = [];
  public post_type = EPostType;
  public post_types: IDropdown[] = [];

  public calendar_posts: Observable<IPost[]> = of([
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

  public getMenuItems (post: IPost): MenuItem[] {
    return [
      {
        command: () => {
          console.warn(post);
        },
        icon: 'ico-md ico-ui-edit',
        label: 'Edit'
      },
      {
        separator: true
      },
      {
        command: () => {
          console.warn(post);
        },
        icon: 'ico-md ico-bin',
        label: 'Delete'
      }
    ];
  }

  public splitConnectionType (type: EConnectionType | EPostType): string {
    return type.split('_').join(' ');
  }

  public inputChanged (input: string): void {
    this.post_table.filterGlobal(input, 'contains');
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public dropdownChanged (data: { dataText: string; propertyName: string; comparison: string }): void {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { dataText, propertyName, comparison } = data;

    this.post_table.filter(dataText, propertyName, comparison);
  }
}
