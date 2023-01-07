import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

import { ItemResolverService } from './utils/guards/item-resolver/item-resolver.service';

import { ROUTES } from './utils/enums/app.enums';

import { AuthGuard } from './utils/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: ROUTES.AUTH,
    loadComponent: () => import('./core/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: ROUTES.EMPTY,
    component: LayoutComponent,
    children: [
      {
        path: ROUTES.EMPTY,
        loadComponent: () => import('./core/catalog/catalog.component').then(m => m.CatalogComponent)
      },
      {
        path: ROUTES.PROFILE,
        loadComponent: () => import('./core/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: ROUTES.PATH_WITH_ID,
        resolve: { item: ItemResolverService },
        canActivate: [AuthGuard],
        loadComponent: () => import('./core/item/item.component').then(m => m.ItemComponent)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
