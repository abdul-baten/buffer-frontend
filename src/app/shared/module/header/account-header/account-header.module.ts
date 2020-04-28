import { AccountHeaderComponent } from './container/account-header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountHeaderComponent],
  exports: [AccountHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class AccountHeaderModule {}
