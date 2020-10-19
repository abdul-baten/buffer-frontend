import { environment } from 'src/environments/environment';
import { GlobalService } from 'src/app/core/service';
import { Injectable } from '@angular/core';
import { EConnectionType } from 'src/app/core/enum';

const { social_platform } = environment;

@Injectable()
export class ChooseConnectionFacade {
  private getFacebookPage (connection_type: string): string {
    const redirect_uri = new URL(social_platform.facebook.dialog_api);

    redirect_uri.searchParams.append('auth_type', 'rerequest');
    redirect_uri.searchParams.append('response_type', 'code');
    redirect_uri.searchParams.append('scope', social_platform.facebook.scope);
    redirect_uri.searchParams.append('client_id', social_platform.facebook.client_id);
    redirect_uri.searchParams.append('redirect_uri', `${social_platform.redirect_base_url}/${connection_type}`);

    return redirect_uri.href;
  }

  constructor (private readonly globalService: GlobalService) {}

  public authConnection (oauth_type: EConnectionType, connection_type: string): void {
    let redirect_uri = '';

    switch (oauth_type) {
    case EConnectionType.FACEBOOK_PAGE:
    case EConnectionType.FACEBOOK_GROUP:
      redirect_uri = this.getFacebookPage(connection_type);
      break;

    default:
      break;
    }

    this.globalService.getLocation().replace(redirect_uri);
  }
}
