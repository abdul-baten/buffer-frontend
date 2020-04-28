import { AccountHeaderModule } from '@shared/module/header/account-header/account-header.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ProfileChangeEmailFormComponent } from './components/profile-change-email-form/profile-change-email-form.component';
import { ProfileChangePasswordFormComponent } from './components/profile-change-password-form/profile-change-password-form.component';
import { ProfileComponent } from './container/profile.component';
import { ProfileFacade } from './facade/profile.facade';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileToolbarComponent } from './components/profile-toolbar/profile-toolbar.component';

@NgModule({
  declarations: [
    ProfileChangeEmailFormComponent,
    ProfileChangePasswordFormComponent,
    ProfileComponent,
    ProfileFormComponent,
    ProfileToolbarComponent,
  ],
  imports: [
    AccountHeaderModule,
    ProfileRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [ProfileFacade],
})
export class ProfileModule {}
