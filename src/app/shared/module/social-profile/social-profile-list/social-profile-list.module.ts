import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileListComponent } from './container/social-profile-list.component';
import { SocialProfileListFacade } from './facade/social-profile-list.facade';

@NgModule({
  declarations: [SocialProfileListComponent],
  exports: [SocialProfileListComponent],
  imports: [ButtonModule, CommonModule, RouterModule],
  providers: [SocialProfileListFacade],
})
export class SocialProfileListModule {}
