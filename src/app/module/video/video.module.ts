import { AuthService } from '@core/service/auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpService } from '@core/service/http/http.service';
import { MainLogoModule } from '@shared/module/logo/main-logo/main-logo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VideoComponent } from '@app/video/container/video.component';
import { VideoFacade } from '@app/video/facade/video.facade';
import { VideoRoutingModule } from '@app/video/video-routing.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    MainLogoModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    VideoRoutingModule,
  ],
  providers: [VideoFacade, AuthService, HttpService],
})
export class VideoModule {}
