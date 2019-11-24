import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { HeaderModule } from 'src/app/shared/module/header/header.module';
import { JumboModule } from 'src/app/shared/module/jumbo/jumbo.module';

import { LandingComponent } from './container/landing.component';
import { LogoModule } from '@shared/module/logo/logo.module';
import { AuthMenuModule } from '@shared/module/auth-menu/auth-menu.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, HeaderModule, JumboModule, LogoModule, AuthMenuModule]
})
export class LandingModule {}
