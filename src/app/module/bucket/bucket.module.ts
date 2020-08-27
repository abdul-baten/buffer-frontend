import { BucketComponent } from './container/bucket.component';
import { BucketRoutingModule } from './bucket-routing.module';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BucketComponent],
  imports: [BucketRoutingModule, ButtonModule, CommonModule, DashboardHeaderModule, RouterModule],
})
export class BucketModule {}
