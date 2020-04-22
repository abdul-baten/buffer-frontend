import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { MatButtonModule } from '@angular/material/button';
import { NewConnectionComponent } from './container/new-connection.component';
import { NewConnectionFacade } from './facade/new-connection.facade';
import { NewConnectionRoutingModule } from './new-connection-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NewConnectionComponent],
  imports: [CommonModule, NewConnectionRoutingModule, MatButtonModule, ConnectionHeaderModule],
  providers: [NewConnectionFacade],
})
export class NewConnectionModule {}
