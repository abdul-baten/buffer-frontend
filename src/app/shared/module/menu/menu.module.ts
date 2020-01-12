// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, RouterModule, SigninModule, MatButtonModule, MatDialogModule],
  exports: [MenuComponent],
})
export class MenuModule {}
