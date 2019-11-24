import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { AuthMenuComponent } from './container/auth-menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SigninModule } from 'src/app/module/signin/signin.module';

@NgModule({
  declarations: [AuthMenuComponent],
  imports: [CommonModule, SigninModule, MatButtonModule, MatDialogModule],
  exports: [AuthMenuComponent]
})
export class AuthMenuModule {}
