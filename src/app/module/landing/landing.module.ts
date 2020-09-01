import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { IntroCreateComponent } from '@app/landing/components/intro-create/intro-create.component';
import { IntroJumboComponent } from '@app/landing/components/intro-jumbo/intro-jumbo.component';
import { IntroPublishComponent } from '@app/landing/components/intro-publish/intro-publish.component';
import { LandingComponent } from '@app/landing/container/landing.component';
import { LandingFacade } from '@app/landing/facade/landing.facade';
import { LandingRoutingModule } from '@app/landing/landing-routing.module';
import { MainHeaderModule } from '@shared/module/header/main-header/main-header.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LandingComponent, IntroJumboComponent, IntroCreateComponent, IntroPublishComponent],
  imports: [CommonModule, LandingRoutingModule, MainHeaderModule, ButtonModule],
  providers: [LandingFacade],
})
export class LandingModule {}
