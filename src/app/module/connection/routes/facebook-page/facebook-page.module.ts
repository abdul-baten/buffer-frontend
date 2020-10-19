import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FacebookPageComponent } from './container/facebook-page.component';
import { FacebookPageFacade } from './facade/facebook-page.facade';
import { FacebookPageRoutingModule } from './facebook-page-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { ToolbarModule } from 'src/app/shared/header/toolbar/toolbar.module';

@NgModule({
  declarations: [FacebookPageComponent],
  imports: [
    ButtonModule,
    CommonModule,
    FacebookPageRoutingModule,
    FieldsetModule,
    LazyLoadImageModule,
    ToolbarModule
  ],
  providers: [FacebookPageFacade]
})
export class FacebookPageModule {}
