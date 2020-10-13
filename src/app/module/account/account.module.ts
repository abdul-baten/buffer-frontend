import { AccountComponent } from './container/account.component';
import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountComponent],
  imports: [AccountRoutingModule, CommonModule, RouterModule]
})
export class AccountModule {}
