import { CommonModule } from '@angular/common';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { NoDataFoundModule } from '@shared/module/no-data-found/no-data-found.module';
import { RouterModule } from '@angular/router';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { SocialProfileListModalComponent } from './container/social-profile-list-modal.component';
import { SocialProfileListModalContentActionComponent } from './components/social-profile-list-modal-content-action/social-profile-list-modal-content-action.component';
import { SocialProfileListModalContentComponent } from './components/social-profile-list-modal-content/social-profile-list-modal-content.component';
import { SocialProfileListModalContentResourceComponent } from './components/social-profile-list-modal-content-resource/social-profile-list-modal-content-resource.component';
import { SocialProfileListModalFacade } from './facade/social-profile-list-modal.facade';
import { SocialProfileListModalFooterComponent } from './components/social-profile-list-modal-footer/social-profile-list-modal-footer.component';
import { SocialProfileListModalHeaderComponent } from './components/social-profile-list-modal-header/social-profile-list-modal-header.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    SocialProfileListModalComponent,
    SocialProfileListModalContentComponent,
    SocialProfileListModalFooterComponent,
    SocialProfileListModalHeaderComponent,
    SocialProfileListModalContentActionComponent,
    SocialProfileListModalContentResourceComponent,
  ],
  entryComponents: [SocialProfileListModalComponent],
  exports: [SocialProfileListModalComponent],
  imports: [
    CommonModule,
    LoaderModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule,
    NoDataFoundModule,
    RouterModule,
    SocialProfileAddModule,
  ],
  providers: [SocialProfileListModalFacade],
})
export class SocialProfileListModalModule {}
