import { AccountHeaderModule } from '@shared/module/header/account-header/account-header.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { ProfileChangeEmailFormComponent } from './components/profile-change-email-form/profile-change-email-form.component';
import { ProfileChangePasswordFormComponent } from './components/profile-change-password-form/profile-change-password-form.component';
import { ProfileComponent } from './container/profile.component';
import { ProfileFacade } from './facade/profile.facade';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [ProfileChangeEmailFormComponent, ProfileChangePasswordFormComponent, ProfileComponent, ProfileFormComponent],
  imports: [
    AccountHeaderModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    TabViewModule,
  ],
  providers: [ProfileFacade],
})
export class ProfileModule {}
