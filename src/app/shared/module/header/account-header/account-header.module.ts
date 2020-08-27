import { AccountHeaderComponent } from './container/account-header.component';
import { AccountRoutesComponent } from './conponents/account-routes/account-routes.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountHeaderComponent, AccountRoutesComponent],
  exports: [AccountHeaderComponent],
  imports: [ButtonModule, CommonModule, RouterModule],
})
export class AccountHeaderModule {}
