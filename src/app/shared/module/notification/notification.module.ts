import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './container/notification.component';

@NgModule({
  declarations: [NotificationComponent],
  entryComponents: [NotificationComponent],
  exports: [NotificationComponent],
  imports: [CommonModule, MatSnackBarModule, MatButtonModule, MatIconModule],
})
export class NotificationModule {}
