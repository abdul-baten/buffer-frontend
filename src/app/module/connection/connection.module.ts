import { CommonModule } from '@angular/common';
import { ConnectionComponent } from './container/connection.component';
import { ConnectionRoutingModule } from './connection-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ConnectionComponent],
  imports: [CommonModule, ConnectionRoutingModule]
})
export class ConnectionModule {}
