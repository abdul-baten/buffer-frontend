// Core Module
import { NgModule } from '@angular/core';

// Third Party Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// Component
import { ScheduleSocialAccountsComponent } from './container/schedule-social-accounts.component';

@NgModule({
  declarations: [ScheduleSocialAccountsComponent],
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  exports: [ScheduleSocialAccountsComponent]
})
export class ScheduleSocialAccountsModule {}
