import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { PostDeleteModalComponent } from './container/post-delete-modal.component';

@NgModule({
  declarations: [PostDeleteModalComponent],
  entryComponents: [PostDeleteModalComponent],
  exports: [PostDeleteModalComponent],
  imports: [CommonModule, MatButtonModule],
})
export class PostDeleteModalModule {}
