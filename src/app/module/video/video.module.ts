import { AuthService } from '@core/service/auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpService } from '@core/service/http/http.service';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VideoComponent } from '@app/video/container/video.component';
import { VideoFacade } from '@app/video/facade/video.facade';
import { VideoRoutingModule } from '@app/video/video-routing.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    MainLogoModule,
    ReactiveFormsModule,
    RouterModule,
    VideoRoutingModule,
  ],
  providers: [VideoFacade, AuthService, HttpService],
})
export class VideoModule {}
