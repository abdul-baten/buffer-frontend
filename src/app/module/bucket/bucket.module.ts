import { BucketComponent } from './container/bucket.component';
import { BucketRoutingModule } from './bucket-routing.module';
import { BucketTopRoutesComponent } from './components/bucket-top-routes/bucket-top-routes.component';
import { BucketTopToolbarComponent } from './components/bucket-top-toolbar/bucket-top-toolbar.component';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BucketComponent, BucketTopRoutesComponent, BucketTopToolbarComponent],
  imports: [BucketRoutingModule, CommonModule, DashboardHeaderModule, RouterModule],
})
export class BucketModule {}
