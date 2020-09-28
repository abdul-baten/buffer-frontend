import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { PasswordModule } from 'primeng/password';
import { ProfileComponent } from './container/profile.component';
import { ProfileFacade } from './facade/profile.facade';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';
@NgModule({
  declarations: [CompanyFormComponent, PasswordFormComponent, ProfileComponent, ProfileFormComponent],
  imports: [
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
    ToolbarModule,
  ],
  providers: [ProfileFacade],
})
export class ProfileModule {}
