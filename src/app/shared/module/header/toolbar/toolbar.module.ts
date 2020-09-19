import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ConnectionsComponent } from './components/connections/connections.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './container/toolbar.component';
import { ToolbarFacade } from './facade/toolbar.facade';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ToolbarComponent, ConnectionsComponent],
  exports: [ToolbarComponent],
  imports: [ButtonModule, CarouselModule, CommonModule, LazyLoadImageModule, RouterModule, TooltipModule],
  providers: [ToolbarFacade],
})
export class ToolbarModule {}
