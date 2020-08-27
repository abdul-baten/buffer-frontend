import { BucketHeaderComponent } from './container/bucket-header.component';
import { BucketRoutesComponent } from './components/bucket-routes/bucket-routes.component';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BucketHeaderComponent, BucketRoutesComponent],
  exports: [BucketHeaderComponent],
  imports: [ButtonModule, RouterModule],
})
export class BucketHeaderModule {}
