import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './container/facebook.component';

const routes: Routes = [
  {
    path: '',
    component: FacebookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookRoutingModule {}
