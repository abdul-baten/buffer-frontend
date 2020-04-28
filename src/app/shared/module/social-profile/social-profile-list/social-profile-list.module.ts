import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileListComponent } from './container/social-profile-list.component';
import { SocialProfileListFacade } from './facade/social-profile-list.facade';

@NgModule({
  declarations: [SocialProfileListComponent],
  exports: [SocialProfileListComponent],
  imports: [CommonModule, MatButtonModule, MatTooltipModule, RouterModule],
  providers: [SocialProfileListFacade],
})
export class SocialProfileListModule {}
