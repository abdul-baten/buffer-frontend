import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SigninComponent } from './container/signin.component';
import { SigninFormComponent } from './component/signin-form/signin-form.component';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule],
  exports: [SigninComponent],
  entryComponents: [SigninComponent]
})
export class SigninModule {}
