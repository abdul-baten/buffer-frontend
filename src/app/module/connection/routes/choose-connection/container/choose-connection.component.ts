import { Component } from '@angular/core';
import { EConnectionType } from 'src/app/core/enum';
import { ChooseConnectionFacade } from '../facade/choose-connection.facade';

@Component({
  selector: 'buffer-choose-connection',
  styleUrls: ['./choose-connection.component.css'],
  templateUrl: './choose-connection.component.html'
})
export class ChooseConnectionComponent {
  // TODO Change type
  connections: any[] = [
    {
      image: 'facebook',
      name: 'Facebook Page',
      type: EConnectionType.FACEBOOK_PAGE
    },
    {
      image: 'facebook',
      name: 'Facebook Group',
      type: EConnectionType.FACEBOOK_GROUP
    },
    {
      image: 'instagram',
      name: 'Instagram Business',
      type: EConnectionType.INSTAGRAM_BUSINESS
    },
    {
      image: 'instagram',
      name: 'Instagram Personal',
      type: EConnectionType.INSTAGRAM_PERSONAL
    },
    {
      image: 'twitter',
      name: 'Twitter',
      type: EConnectionType.TWITTER
    },
    {
      image: 'linkedin',
      name: 'Linkedin Page',
      type: EConnectionType.LINKEDIN_PAGE
    },
    {
      image: 'linkedin',
      name: 'Linkedin Profile',
      type: EConnectionType.LINKEDIN_PROFILE
    },
    {
      image: 'pinterest',
      name: 'Pinterest',
      type: EConnectionType.PINTEREST
    }
  ];

  constructor (private readonly facade: ChooseConnectionFacade) {}

  public chooseNewConnection (oauth_type: EConnectionType): void {
    const split_oauth_type = oauth_type.toLowerCase().split('_');
    const connection_type = split_oauth_type.join('-');
    const [auth_type] = split_oauth_type;

    this.facade.authConnection(auth_type, connection_type);
  }

  public trackBy (index: number): number {
    return Number(index);
  }
}
