import { AccountComponent } from './container/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        loadChildren: () => import('./routes/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'invoice',
        loadChildren: () => import('./routes/invoice/invoice.module').then(m => m.InvoiceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
