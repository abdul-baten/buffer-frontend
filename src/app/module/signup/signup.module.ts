import { AuthService } from 'src/app/core/service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MainLogoModule } from '../../shared/logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './container/signup.component';
import { SignupFacade } from './facade/signup.facade';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupComponent, SignupFormComponent],
  imports: [ButtonModule, CommonModule, InputTextModule, FormsModule, MainLogoModule, ReactiveFormsModule, RouterModule, SignupRoutingModule],
  providers: [SignupFacade, AuthService]
})
export class SignupModule {}
