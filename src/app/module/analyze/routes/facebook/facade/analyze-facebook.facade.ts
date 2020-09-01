import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http/http.service';

@Injectable()
export class FacebookFacade {
  constructor(private httpService: HttpService) {}

  fetchAnalytics() {
    this.httpService.get('facebook/analytics').subscribe((response: any) => {
      console.clear();
      console.warn(response);
    });
  }
}
