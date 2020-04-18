import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './container/facebook.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FacebookComponent],
  imports: [CommonModule, HttpClientModule, FacebookRoutingModule],
})
export class FacebookModule {}
