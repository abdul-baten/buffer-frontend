// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Specific Modules
import { LandingRoutingModule } from './landing-routing.module';
import { HeaderModule } from 'src/app/shared/module/header/header.module';

// Third Party Modules
import { MatButtonModule } from '@angular/material/button';

// Components
import { LandingComponent } from './container/landing.component';
import { IntroJumboComponent } from './component/intro-jumbo/intro-jumbo.component';
import { IntroCreateComponent } from './component/intro-create/intro-create.component';
import { IntroPublishComponent } from './component/intro-publish/intro-publish.component';
import { LandingFacade } from './facade/landing.facade';

@NgModule({
  declarations: [LandingComponent, IntroJumboComponent, IntroCreateComponent, IntroPublishComponent],
  imports: [CommonModule, LandingRoutingModule, HeaderModule, MatButtonModule],
  providers: [LandingFacade]
})
export class LandingModule {}
