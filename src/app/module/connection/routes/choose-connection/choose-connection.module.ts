import { ButtonModule } from 'primeng/button';
import { ChooseConnectionComponent } from './container/choose-connection.component';
import { ChooseConnectionFacade } from './facade/choose-connection.facade';
import { ChooseConnectionRoutingModule } from './choose-connection-routing.module';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';

@NgModule({
  declarations: [ChooseConnectionComponent],
  imports: [ButtonModule, ChooseConnectionRoutingModule, CommonModule, FieldsetModule, ToolbarModule],
  providers: [ChooseConnectionFacade],
})
export class ChooseConnectionModule {}
