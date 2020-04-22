import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { SocialProfileAddComponent } from './container/social-profile-add.component';
import { SocialProfileAddFacade } from './facade/social-profile-add.facade';

@NgModule({
  declarations: [SocialProfileAddComponent],
  exports: [SocialProfileAddComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule],
  providers: [SocialProfileAddFacade],
})
export class SocialProfileAddModule {}
