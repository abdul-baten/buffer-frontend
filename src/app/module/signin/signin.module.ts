import { AuthService } from '@core/service/auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpService } from '@core/service/http/http.service';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SigninComponent } from '@app/signin/container/signin.component';
import { SigninFacade } from '@app/signin/facade/signin.facade';
import { SigninFormComponent } from '@app/signin/components/signin-form/signin-form.component';
import { SigninRoutingModule } from '@app/signin/signin-routing.module';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent],
  imports: [
    CommonModule,
    LoaderModule,
    MainLogoModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    SigninRoutingModule,
  ],
  providers: [SigninFacade, AuthService, HttpService],
})
export class SigninModule {}
