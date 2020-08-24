import { ButtonModule } from 'primeng/button';
import { ConnectionHeaderComponent } from './container/connection-header.component';
import { NgModule } from '@angular/core';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';

@NgModule({
  declarations: [ConnectionHeaderComponent],
  exports: [ConnectionHeaderComponent],
  imports: [ButtonModule, SocialProfileAddModule],
})
export class ConnectionHeaderModule {}
