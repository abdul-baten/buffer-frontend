import { AuthService } from '@core/service/auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HttpService } from '@core/service/http/http.service';
import { InputTextModule } from 'primeng/inputtext';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SigninComponent } from '@app/signin/container/signin.component';
import { SigninFacade } from '@app/signin/facade/signin.facade';
import { SigninFormComponent } from '@app/signin/components/signin-form/signin-form.component';
import { SigninRoutingModule } from '@app/signin/signin-routing.module';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent],
  imports: [CommonModule, InputTextModule, ButtonModule, MainLogoModule, ReactiveFormsModule, RouterModule, SigninRoutingModule],
  providers: [SigninFacade, AuthService, HttpService],
})
export class SigninModule {}
