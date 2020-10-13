import { AuthService, HttpService } from 'src/app/core/service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MainLogoModule } from '../../shared/logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './container/signin.component';
import { SigninFacade } from './facade/signin.facade';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent],
  imports: [CommonModule, InputTextModule, ButtonModule, MainLogoModule, ReactiveFormsModule, RouterModule, SigninRoutingModule],
  providers: [SigninFacade, AuthService, HttpService]
})
export class SigninModule {}
