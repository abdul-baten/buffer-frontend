import { AccountProfileChangeComponent } from './components/account-profile-change/account-profile-change.component';
import { AccountProfileChangeEmailFormComponent } from './components/account-profile-change-email-form/account-profile-change-email-form.component';
import { AccountProfileChangePasswordFormComponent } from './components/account-profile-change-password-form/account-profile-change-password-form.component';
import { AccountProfileComponent } from './container/account-profile.component';
import { AccountProfileFacade } from './facade/account-profile.facade';
import { AccountProfileFormComponent } from './components/account-profile-form/account-profile-form.component';
import { AccountProfileRoutingModule } from './account-profile-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AccountProfileComponent,
    AccountProfileFormComponent,
    AccountProfileChangeComponent,
    AccountProfileChangeEmailFormComponent,
    AccountProfileChangePasswordFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    AccountProfileRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AccountProfileFacade],
})
export class AccountProfileModule {}
