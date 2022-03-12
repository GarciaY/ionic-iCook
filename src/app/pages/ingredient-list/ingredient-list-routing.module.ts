import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientListPage } from './ingredient-list.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientListPageRoutingModule {}
