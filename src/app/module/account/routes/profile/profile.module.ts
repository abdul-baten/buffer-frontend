import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ProfileChangeComponent } from './components/profile-change/profile-change.component';
import { ProfileChangeEmailFormComponent } from './components/profile-change-email-form/profile-change-email-form.component';
import { ProfileChangePasswordFormComponent } from './components/profile-change-password-form/profile-change-password-form.component';
import { ProfileComponent } from './container/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ResponsiveLayoutService } from '@core/service/responsive-layout/responsive-layout.service';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent,
    ProfileChangeComponent,
    ProfileChangeEmailFormComponent,
    ProfileChangePasswordFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ResponsiveLayoutService],
})
export class ProfileModule {}
