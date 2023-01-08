import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

import { ItemResolverService } from './utils/guards/item-resolver/item-resolver.service';
import { UserResolverService } from './utils/guards/user-resolver/user-resolver.service';

import { ROUTES } from './utils/enums/app.enums';

import { AuthGuard } from './utils/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: ROUTES.AUTH,
    loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent)
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
        resolve: { user: UserResolverService },
        canActivate: [AuthGuard],
        loadComponent: () => import('./core/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: ROUTES.PATH_WITH_ID,
        resolve: { item: ItemResolverService },
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
