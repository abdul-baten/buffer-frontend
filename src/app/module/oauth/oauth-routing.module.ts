import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
      },
      {
        path: 'facebook',
        loadChildren: () => import('./facebook/facebook.module').then(m => m.FacebookModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OauthRoutingModule {}
