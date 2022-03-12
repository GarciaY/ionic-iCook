import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOtherProfilePage } from './view-other-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOtherProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOtherProfilePageRoutingModule {}
