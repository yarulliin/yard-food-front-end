import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

import { ROUTES } from './utils/enums/app.enums';

const routes: Routes = [
  {
    path: ROUTES.EMPTY,
    component: LayoutComponent,
    children: [
      {
        path: ROUTES.EMPTY,
        loadComponent: () => import('./core/catalog/catalog.component').then(m => m.CatalogComponent)
      }
    ]
  },
  {
    path: ROUTES.AUTH,
    loadComponent: () => import('./core/login/login.component').then(m => m.LoginComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
