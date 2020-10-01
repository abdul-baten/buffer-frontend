import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { IntroCreateComponent } from './components/intro-create/intro-create.component';
import { IntroJumboComponent } from './components/intro-jumbo/intro-jumbo.component';
import { IntroPublishComponent } from './components/intro-publish/intro-publish.component';
import { LandingComponent } from './container/landing.component';
import { LandingFacade } from './facade/landing.facade';
import { LandingRoutingModule } from './landing-routing.module';
import { MainHeaderModule } from 'src/app/shared/header/main-header/main-header.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LandingComponent, IntroJumboComponent, IntroCreateComponent, IntroPublishComponent],
  imports: [CommonModule, LandingRoutingModule, MainHeaderModule, ButtonModule],
  providers: [LandingFacade],
})
export class LandingModule {}
