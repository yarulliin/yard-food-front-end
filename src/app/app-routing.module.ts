import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from "./utils/enums/app.enums";

const routes: Routes = [
  {
    path: ROUTES.EMPTY,
    loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
