import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { EConnectionType, EPostType } from 'src/app/core/enum';
import { IDropdown } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-bucket-header',
  styleUrls: ['./bucket-header.component.css'],
  templateUrl: './bucket-header.component.html'
})
export class BucketHeaderComponent implements OnInit {
  connection_items: IDropdown[] = [];
  post_type = EPostType;
  post_types: IDropdown[] = [];

  @Output() input_change = new EventEmitter<string>();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  @Output() dropdown_change = new EventEmitter<{ dataText: string; propertyName: string; comparison: string }>();

  ngOnInit (): void {
    this.connection_items = [
      { label: this.splitConnectionType(EConnectionType.FACEBOOK_PAGE),
        value: 'Facebook_Page' },
      { label: this.splitConnectionType(EConnectionType.FACEBOOK_GROUP),
        value: 'Facebook_Group' },
      { label: this.splitConnectionType(EConnectionType.INSTAGRAM_BUSINESS),
        value: 'Instagram_Business' },
      { label: this.splitConnectionType(EConnectionType.INSTAGRAM_PERSONAL),
        value: 'Instagram_Personal' },
      { label: this.splitConnectionType(EConnectionType.TWITTER),
        value: 'Twitter' },
      { label: this.splitConnectionType(EConnectionType.LINKEDIN_PAGE),
        value: 'Linkedin_Page' },
      { label: this.splitConnectionType(EConnectionType.LINKEDIN_PROFILE),
        value: 'Linkedin_Profile' },
      { label: this.splitConnectionType(EConnectionType.PINTEREST),
        value: 'Pinterest' }
    ];

    this.post_types = [
      { label: this.splitConnectionType(EPostType.TEXT),
        value: 'status' },
      { label: this.splitConnectionType(EPostType.IMAGE),
        value: 'image' },
      { label: this.splitConnectionType(EPostType.VIDEO),
        value: 'video' }
    ];
  }

  private splitConnectionType (type: EConnectionType | EPostType): string {
    return type.split('_').join(' ');
  }

  inputChanged (input_text: string): void {
    this.input_change.emit(input_text);
  }

  dataChanged (data_text: string, property_name: string, comparison: string): void {
    this.dropdown_change.emit({
      comparison,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      dataText: data_text,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      propertyName: property_name
    });
  }
}
