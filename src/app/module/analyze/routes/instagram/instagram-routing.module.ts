import { AnalyzeInstagramComponent } from './container/instagram.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: AnalyzeInstagramComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AnalyzeInstagramRoutingModule {}
