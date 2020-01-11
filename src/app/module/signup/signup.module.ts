// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Application Specific Modules
import { SignupRoutingModule } from '@app/signup/signup-routing.module';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Facade
import { SignupFacade } from '@app/signup/facade/signup.facade';

// Components
import { SignupComponent } from '@app/signup/container/signup.component';
import { SignupFormComponent } from '@app/signup/components/signup-form/signup-form.component';
import { SignupJumboComponent } from '@app/signup/components/signup-jumbo/signup-jumbo.component';
import { SignupHeaderComponent } from '@app/signup/components/signup-header/signup-header.component';

@NgModule({
  declarations: [SignupComponent, SignupFormComponent, SignupJumboComponent, SignupHeaderComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,

    MainLogoModule,

    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [SignupFacade]
})
export class SignupModule {}
