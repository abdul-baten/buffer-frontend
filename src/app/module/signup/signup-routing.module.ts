import { NgModule } from '@angular/core';
import { OnboardComponent } from '@app/signup/components/onboard/onboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '@app/signup/container/signup.component';
import { SignupFormComponent } from '@app/signup/components/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    children: [
      {
        path: '',
        component: SignupFormComponent,
      },
      {
        path: 'onboard',
        component: OnboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
