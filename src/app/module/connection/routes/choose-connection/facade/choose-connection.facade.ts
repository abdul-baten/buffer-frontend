import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/service';

const { api_base_uri } = environment;

@Injectable()
export class ChooseConnectionFacade {
  constructor (private readonly globalService: GlobalService) {}

  public authConnection (auth_type: string, connection_type: string): void {
    this.globalService.getLocation().replace(`${api_base_uri}${auth_type}/authorize?connection_type=${connection_type}`);
  }
}
