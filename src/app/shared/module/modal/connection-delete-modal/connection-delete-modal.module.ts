import { CommonModule } from '@angular/common';
import { ConnectionDeleteModalComponent } from './container/connection-delete-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ConnectionDeleteModalComponent],
  entryComponents: [ConnectionDeleteModalComponent],
  exports: [ConnectionDeleteModalComponent],
  imports: [CommonModule, MatButtonModule],
})
export class ConnectionDeleteModalModule {}
