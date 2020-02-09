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
import { LoaderModule } from '@shared/module/loader/loader.module';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,

    LoaderModule,
    MainLogoModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [SigninFacade],
})
export class SigninModule {}
