// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Application Specific Modules
import { SigninRoutingModule } from '@app/signin/signin-routing.module';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Facade
import { SigninFacade } from '@app/signin/facade/signin.facade';

// Components
import { SigninComponent } from '@app/signin/container/signin.component';
import { SigninFormComponent } from '@app/signin/components/signin-form/signin-form.component';
import { SigninJumboComponent } from '@app/signin/components/signin-jumbo/signin-jumbo.component';
import { SigninHeaderComponent } from '@app/signin/components/signin-header/signin-header.component';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent, SigninHeaderComponent, SigninJumboComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,

    MainLogoModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [SigninFacade]
})
export class SigninModule {}
