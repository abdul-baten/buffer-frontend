import { AccountComponent } from './container/account.component';
import { DocumentResolver } from 'src/app/resolvers';
import { NgModule } from '@angular/core';
import { RouteMeta } from 'src/app/core/constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RouteMeta.PROFILE_MODULE.ROUTE
      },
      {
        data: { title: RouteMeta.PROFILE_MODULE.TITLE },
        loadChildren: () => import('./routes/profile/profile.module').then((module) => module.ProfileModule),
        path: RouteMeta.PROFILE_MODULE.ROUTE,
        resolve: { document_data: DocumentResolver },
        runGuardsAndResolvers: 'always'
      },
      {
        data: { title: RouteMeta.INVOICE.TITLE },
        loadChildren: () => import('./routes/invoice/invoice.module').then((module) => module.InvoiceModule),
        path: RouteMeta.INVOICE.ROUTE,
        resolve: { document_data: DocumentResolver },
        runGuardsAndResolvers: 'always'
      },
      {
        data: { title: RouteMeta.BILLING.TITLE },
        loadChildren: () => import('./routes/billing/billing.module').then((module) => module.BillingModule),
        path: RouteMeta.BILLING.ROUTE,
        resolve: { document_data: DocumentResolver },
        runGuardsAndResolvers: 'always'
      },
      {
        data: { title: RouteMeta.PLAN.TITLE },
        loadChildren: () => import('./routes/plan/plan.module').then((module) => module.PlanModule),
        path: RouteMeta.PLAN.ROUTE,
        resolve: { document_data: DocumentResolver },
        runGuardsAndResolvers: 'always'
      }
    ],
    component: AccountComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AccountRoutingModule {}
