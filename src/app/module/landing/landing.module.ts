// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { LandingRoutingModule } from '@app/landing/landing-routing.module';
import { MainHeaderModule } from '@shared/module/header/main-header/main-header.module';

// Third Party Modules
import { MatButtonModule } from '@angular/material/button';

// Components
import { LandingComponent } from '@app/landing/container/landing.component';
import { IntroJumboComponent } from '@app/landing/components/intro-jumbo/intro-jumbo.component';
import { IntroCreateComponent } from '@app/landing/components/intro-create/intro-create.component';
import { IntroPublishComponent } from '@app/landing/components/intro-publish/intro-publish.component';

// Facade
import { LandingFacade } from '@app/landing/facade/landing.facade';

@NgModule({
  declarations: [LandingComponent, IntroJumboComponent, IntroCreateComponent, IntroPublishComponent],
  imports: [CommonModule, LandingRoutingModule, MainHeaderModule, MatButtonModule],
  providers: [LandingFacade],
})
export class LandingModule {}
