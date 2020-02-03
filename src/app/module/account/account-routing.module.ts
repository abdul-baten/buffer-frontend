import { AccountComponent } from './container/account.component';
import { NgModule } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
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
        path: PAGES.ACCOUNT_PROFILE_PAGE.PAGE_ROUTE,
        data: { title: PAGES.ACCOUNT_PROFILE_PAGE.PAGE_TITLE },
        loadChildren: () => import('./routes/account-profile/account-profile.module').then(m => m.AccountProfileModule),
      },
      {
        path: PAGES.ACCOUNT_INVOICE_PAGE.PAGE_ROUTE,
        data: { title: PAGES.ACCOUNT_INVOICE_PAGE.PAGE_TITLE },
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
