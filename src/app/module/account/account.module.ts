import { AccountComponent } from './container/account.component';
import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [AccountRoutingModule, CommonModule, DashboardHeaderModule, RouterModule, SocialProfileAddModule],
})
export class AccountModule {}
