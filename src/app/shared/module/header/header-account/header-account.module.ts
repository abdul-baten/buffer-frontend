import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HeaderAccountComponent } from './container/header-account.component';
import { HeaderAccountFacade } from './facade/header-account.facade';
import { HeaderAccountService } from './service/header-account.service';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderAccountComponent],
  imports: [ButtonModule, CommonModule, MenuModule, RouterModule],
  exports: [HeaderAccountComponent],
  providers: [HeaderAccountFacade, HeaderAccountService],
})
export class HeaderAccountModule {}
