import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HeaderAccountComponent } from './container/header-account.component';
import { HeaderAccountFacade } from './facade/header-account.facade';
import { HeaderAccountService } from './service/header-account.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlideMenuModule } from 'primeng/slidemenu';

@NgModule({
  declarations: [HeaderAccountComponent],
  imports: [ButtonModule, CommonModule, RouterModule, SlideMenuModule],
  exports: [HeaderAccountComponent],
  providers: [HeaderAccountFacade, HeaderAccountService],
})
export class HeaderAccountModule {}
