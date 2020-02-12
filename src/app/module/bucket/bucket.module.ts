import { BucketComponent } from './container/bucket.component';
import { BucketRoutingModule } from './bucket-routing.module';
import { BucketTopRoutesComponent } from './components/bucket-top-routes/bucket-top-routes.component';
import { BucketTopToolbarComponent } from './components/bucket-top-toolbar/bucket-top-toolbar.component';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileListModule } from '@shared/module/social-profile/social-profile-list/social-profile-list.module';

@NgModule({
  declarations: [BucketComponent, BucketTopRoutesComponent, BucketTopToolbarComponent],
  imports: [
    BucketRoutingModule,
    CommonModule,
    DashboardHeaderModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    SocialProfileAddModule,
    SocialProfileListModule,
  ],
})
export class BucketModule {}
