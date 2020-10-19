import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FacebookGroupComponent } from './container/facebook-group.component';
import { FacebookGroupFacade } from './facade/facebook-group.facade';
import { FacebookGroupRoutingModule } from './facebook-group-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { ToolbarModule } from 'src/app/shared/header/toolbar/toolbar.module';

@NgModule({
  declarations: [FacebookGroupComponent],
  imports: [ButtonModule, CommonModule, FacebookGroupRoutingModule, FieldsetModule, LazyLoadImageModule, ToolbarModule],
  providers: [FacebookGroupFacade]
})
export class FacebookGroupModule {}
