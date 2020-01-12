// Core Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application Specific Modules

// Third Party Modules

// Components
import { SigninComponent } from '@app/signin/container/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninRoutingModule {}
