import { AccountComponent } from './container/account.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileListModule } from '@shared/module/social-profile/social-profile-list/social-profile-list.module';

@NgModule({
  declarations: [AccountComponent, AccountHeaderComponent],
  imports: [
    AccountRoutingModule,
    CommonModule,
    DashboardHeaderModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    SocialProfileAddModule,
    SocialProfileListModule,
  ],
})
export class AccountModule {}
