import { AuthService } from '@core/service/auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '@app/signup/container/signup.component';
import { SignupFacade } from '@app/signup/facade/signup.facade';
import { SignupFormComponent } from '@app/signup/components/signup-form/signup-form.component';
import { SignupRoutingModule } from '@app/signup/signup-routing.module';
@NgModule({
  declarations: [SignupComponent, SignupFormComponent],
  imports: [ButtonModule, CommonModule, InputTextModule, FormsModule, MainLogoModule, ReactiveFormsModule, RouterModule, SignupRoutingModule],
  providers: [SignupFacade, AuthService],
})
export class SignupModule {}
