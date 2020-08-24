import { CommonModule } from '@angular/common';
import { HeaderAccountComponent } from './container/header-account.component';
import { HeaderAccountFacade } from './facade/header-account.facade';
import { HeaderAccountService } from './service/header-account.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [HeaderAccountComponent],
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatMenuModule, MatTooltipModule, RouterModule, SplitButtonModule],
  exports: [HeaderAccountComponent],
  providers: [HeaderAccountFacade, HeaderAccountService],
})
export class HeaderAccountModule {}
