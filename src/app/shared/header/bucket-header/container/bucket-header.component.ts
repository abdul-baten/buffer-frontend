import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { E_CONNECTION_TYPE, E_POST_TYPE } from 'src/app/core/enum';
import { I_DROPDOWN } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--bucket-header',
  styleUrls: ['./bucket-header.component.css'],
  templateUrl: './bucket-header.component.html',
})
export class BucketHeaderComponent implements OnInit {
  connectionItems: I_DROPDOWN[] = [];
  postType = E_POST_TYPE;
  postTypes: I_DROPDOWN[] = [];

  @Output() inputChange = new EventEmitter<string>();
  @Output() dropdownChange = new EventEmitter<{ dataText: string; propertyName: string; comparison: string }>();

  ngOnInit(): void {
    this.connectionItems = [
      { label: this.splitConnectionType(E_CONNECTION_TYPE.FACEBOOK_PAGE), value: 'Facebook_Page' },
      { label: this.splitConnectionType(E_CONNECTION_TYPE.FACEBOOK_GROUP), value: 'Facebook_Group' },
      { label: this.splitConnectionType(E_CONNECTION_TYPE.INSTAGRAM_BUSINESS), value: 'Instagram_Business' },
      { label: this.splitConnectionType(E_CONNECTION_TYPE.INSTAGRAM_PERSONAL), value: 'Instagram_Personal' },
      { label: this.splitConnectionType(E_CONNECTION_TYPE.TWITTER), value: 'Twitter' },
      { label: this.splitConnectionType(E_CONNECTION_TYPE.LINKEDIN_PAGE), value: 'Linkedin_Page' },
      { label: this.splitConnectionType(E_CONNECTION_TYPE.LINKEDIN_PROFILE), value: 'Linkedin_Profile' },
      { label: this.splitConnectionType(E_CONNECTION_TYPE.PINTEREST), value: 'Pinterest' },
    ];

    this.postTypes = [
      { label: this.splitConnectionType(E_POST_TYPE.TEXT), value: 'status' },
      { label: this.splitConnectionType(E_POST_TYPE.IMAGE), value: 'image' },
      { label: this.splitConnectionType(E_POST_TYPE.VIDEO), value: 'video' },
    ];
  }

  private splitConnectionType(typeName: E_CONNECTION_TYPE | E_POST_TYPE): string {
    return typeName.split('_').join(' ');
  }

  inputChanged(inputText: string): void {
    this.inputChange.emit(inputText);
  }

  dataChanged(dataText: string, propertyName: string, comparison: string): void {
    this.dropdownChange.emit({ dataText, propertyName, comparison });
  }
}
