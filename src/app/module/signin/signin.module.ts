// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Application Specific Modules
import { SigninFacade } from './facade/signin.facade';
import { LogoModule } from '@shared/module/logo/logo.module';
import { SigninRoutingModule } from '../signin/signin-routing.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Components

import { SigninComponent } from './container/signin.component';
import { SigninFormComponent } from './component/signin-form/signin-form.component';
import { SigninJumboComponent } from './component/signin-jumbo/signin-jumbo.component';
import { SigninHeaderComponent } from './component/signin-header/signin-header.component';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent, SigninHeaderComponent, SigninJumboComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    LogoModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [SigninFacade]
})
export class SigninModule {}
