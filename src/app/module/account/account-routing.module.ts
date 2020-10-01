import { AccountComponent } from './container/account.component';
import { DocumentResolver } from 'src/app/resolvers';
import { NgModule } from '@angular/core';
import { PAGES } from 'src/app/core/constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.PAGE_ROUTE,
      },
      {
        data: { title: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.PAGE_TITLE },
        loadChildren: () => import('./routes/profile/profile.module').then((m) => m.ProfileModule),
        path: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
        runGuardsAndResolvers: 'always',
      },
      {
        data: { title: PAGES.ACCOUNT_MODULE.ROUTES.INVOICE_MODULE.PAGE_TITLE },
        loadChildren: () => import('./routes/invoice/invoice.module').then((m) => m.InvoiceModule),
        path: PAGES.ACCOUNT_MODULE.ROUTES.INVOICE_MODULE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
        runGuardsAndResolvers: 'always',
      },
      {
        data: { title: PAGES.ACCOUNT_MODULE.ROUTES.BILLING_MODULE.PAGE_TITLE },
        loadChildren: () => import('./routes/billing/billing.module').then((m) => m.BillingModule),
        path: PAGES.ACCOUNT_MODULE.ROUTES.BILLING_MODULE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
        runGuardsAndResolvers: 'always',
      },
      {
        data: { title: PAGES.ACCOUNT_MODULE.ROUTES.PLAN_MODULE.PAGE_TITLE },
        loadChildren: () => import('./routes/plan/plan.module').then((m) => m.PlanModule),
        path: PAGES.ACCOUNT_MODULE.ROUTES.PLAN_MODULE.PAGE_ROUTE,
        resolve: { documentResolver: DocumentResolver },
        runGuardsAndResolvers: 'always',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
