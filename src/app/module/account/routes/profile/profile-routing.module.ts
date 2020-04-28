import { NgModule } from '@angular/core';
import { PAGES } from '@core/constant/page/page.constant';
import { ProfileChangeEmailFormComponent } from './components/profile-change-email-form/profile-change-email-form.component';
import { ProfileChangePasswordFormComponent } from './components/profile-change-password-form/profile-change-password-form.component';
import { ProfileComponent } from './container/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_PROFILE_PAGE.PAGE_ROUTE,
      },
      {
        path: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_PROFILE_PAGE.PAGE_ROUTE,
        data: { title: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_PROFILE_PAGE.PAGE_TITLE },
        component: ProfileFormComponent,
      },
      {
        path: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_EMAIL_PAGE.PAGE_ROUTE,
        data: { title: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_EMAIL_PAGE.PAGE_TITLE },
        component: ProfileChangeEmailFormComponent,
      },
      {
        path: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_PASSWORD_PAGE.PAGE_ROUTE,
        data: { title: PAGES.ACCOUNT_MODULE.ROUTES.PROFILE_MODULE.ROUTES.EDIT_PASSWORD_PAGE.PAGE_TITLE },
        component: ProfileChangePasswordFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
