import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from '../utils/enums/app.enums';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private _route: string = ROUTES.EMPTY;

  public get route(): string {
    return this._route;
  }

  public set route(route: string) {
    this._route = route;
  }

  constructor(
    private router: Router,
  ) { }

  public setCurrentRoute(): void {
    this.route = this.router.url;
  }

  public navigate(route: string = this.route): void {
    this.router.navigate([route]);
  }
}
