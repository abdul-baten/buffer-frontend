import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { SocialProfileAddModalComponent } from './container/social-profile-add-modal.component';
import { SocialProfileAddModalContentActionComponent } from './components/social-profile-add-modal-content-action/social-profile-add-modal-content-action.component';
import { SocialProfileAddModalContentComponent } from './components/social-profile-add-modal-content/social-profile-add-modal-content.component';
import { SocialProfileAddModalContentPlanComponent } from './components/social-profile-add-modal-content-plan/social-profile-add-modal-content-plan.component';
import { SocialProfileAddModalContentResourceComponent } from './components/social-profile-add-modal-content-resource/social-profile-add-modal-content-resource.component';
import { SocialProfileAddModalFooterComponent } from './components/social-profile-add-modal-footer/social-profile-add-modal-footer.component';
import { SocialProfileAddModalHeaderComponent } from './components/social-profile-add-modal-header/social-profile-add-modal-header.component';

@NgModule({
  declarations: [
    SocialProfileAddModalComponent,
    SocialProfileAddModalContentActionComponent,
    SocialProfileAddModalContentComponent,
    SocialProfileAddModalContentPlanComponent,
    SocialProfileAddModalContentResourceComponent,
    SocialProfileAddModalFooterComponent,
    SocialProfileAddModalHeaderComponent,
  ],
  entryComponents: [SocialProfileAddModalComponent],
  exports: [SocialProfileAddModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LoaderModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class SocialProfileAddModalModule {}
