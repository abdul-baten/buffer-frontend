// Core Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Application Specific Modules
import { SigninModule } from '@app/signin/signin.module';

// Third Party Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { MenuComponent } from '@shared/module/menu/container/menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, RouterModule, SigninModule],
})
export class MenuModule {}
