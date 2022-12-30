import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./core/layout/layout.component";

import { ROUTES } from "./utils/enums/app.enums";

const routes: Routes = [
  {
    path: ROUTES.EMPTY,
    component: LayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
