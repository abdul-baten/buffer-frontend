import { AuthService } from '@core/service/auth/auth.service';
import { CommonModule } from '@angular/common';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { OnboardComponent } from './components/onboard/onboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '@app/signup/container/signup.component';
import { SignupFacade } from '@app/signup/facade/signup.facade';
import { SignupFormComponent } from '@app/signup/components/signup-form/signup-form.component';
import { SignupRoutingModule } from '@app/signup/signup-routing.module';

@NgModule({
  declarations: [SignupComponent, SignupFormComponent, OnboardComponent],
  imports: [
    CommonModule,
    MainLogoModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    SignupRoutingModule,
  ],
  providers: [SignupFacade, AuthService],
})
export class SignupModule {}
