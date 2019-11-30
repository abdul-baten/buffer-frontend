// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Application Specific Modules
import { SignupFacade } from './facade/signup.facade';
import { LogoModule } from '@shared/module/logo/logo.module';
import { SignupRoutingModule } from './signup-routing.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Components
import { SignupComponent } from './container/signup.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { SignupJumboComponent } from './component/signup-jumbo/signup-jumbo.component';
import { SignupHeaderComponent } from './component/signup-header/signup-header.component';

@NgModule({
  declarations: [SignupComponent, SignupFormComponent, SignupJumboComponent, SignupHeaderComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    LogoModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [SignupFacade]
})
export class SignupModule {}
