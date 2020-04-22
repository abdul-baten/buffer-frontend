import { ConnectionHeaderComponent } from './container/connection-header.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ConnectionHeaderComponent],
  exports: [ConnectionHeaderComponent],
  imports: [MatButtonModule],
})
export class ConnectionHeaderModule {}
