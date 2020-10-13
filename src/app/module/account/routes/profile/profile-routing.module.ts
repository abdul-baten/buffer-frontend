import { NgModule } from '@angular/core';
import { ProfileComponent } from './container/profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: ProfileComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ProfileRoutingModule {}
