import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { SocialProfileListComponent } from './container/social-profile-list.component';
import { SocialProfileListFacade } from './facade/social-profile-list.facade';
import { SocialProfileListModalModule } from '@shared/module/modal/social-profile-list-modal/social-profile-list-modal.module';

@NgModule({
  declarations: [SocialProfileListComponent],
  exports: [SocialProfileListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    SocialProfileListModalModule,
  ],
  providers: [SocialProfileListFacade],
})
export class SocialProfileListModule {}
