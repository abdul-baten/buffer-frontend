import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { FacebookPageFacade } from '../facade/facebook-page.facade';
import { IConnection } from 'src/app/core/model';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'buffer-app-facebook-page',
  styleUrls: ['./facebook-page.component.css'],
  templateUrl: './facebook-page.component.html'
})
export class FacebookPageComponent implements OnDestroy {
  private subscription$ = new Subscription();
  public connections$: Observable<IConnection[]> = of([]);

  constructor (private activatedRoute: ActivatedRoute, private readonly facade: FacebookPageFacade) {
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      const code = params.get('code') as string;
      const error = params.get('error') as string;

      if (error) {
        this.facade.navigate('connection/choose');
      }

      if (code) {
        this.connections$ = this.facade.getPages(code, 'facebook-page');
      }
    });
  }

  public addFacebookPage (page_info: IConnection): void {
    this.subscription$.add(this.facade.addFacebookPage(page_info).subscribe(() => this.facade.navigate('connection/profiles')));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public trackBy (_index: number, connection: IConnection): number {
    return Number(connection.connection_id);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
