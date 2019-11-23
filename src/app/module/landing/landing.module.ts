import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './container/landing.component';
import { HeaderModule } from 'src/app/shared/module/header/header.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, HeaderModule]
})
export class LandingModule {}
