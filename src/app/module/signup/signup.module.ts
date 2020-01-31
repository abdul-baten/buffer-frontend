import { CommonModule } from '@angular/common';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '@app/signup/container/signup.component';
import { SignupFacade } from '@app/signup/facade/signup.facade';
import { SignupFormComponent } from '@app/signup/components/signup-form/signup-form.component';
import { SignupRoutingModule } from '@app/signup/signup-routing.module';

@NgModule({
  declarations: [SignupComponent, SignupFormComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,

    MainLogoModule,

    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [SignupFacade],
})
export class SignupModule {}
