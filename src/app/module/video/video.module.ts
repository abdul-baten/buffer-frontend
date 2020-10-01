import { AuthService, HttpService } from 'src/app/core/service';
import { CommonModule } from '@angular/common';
import { MainLogoModule } from '../../shared/logo/main-logo/main-logo.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VideoComponent } from './container/video.component';
import { VideoFacade } from './facade/video.facade';
import { VideoRoutingModule } from './video-routing.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, MainLogoModule, ReactiveFormsModule, RouterModule, VideoRoutingModule],
  providers: [VideoFacade, AuthService, HttpService],
})
export class VideoModule {}
