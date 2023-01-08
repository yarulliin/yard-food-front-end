import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';

import { RouterService } from '../../../services/router/router.service';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

import { User } from '../../../core/auth/utils/interfaces/login.interfaces';

import { ROUTES, STORAGE_KEYS } from '../../enums/app.enums';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private routerService: RouterService,
    private localStorageService: LocalStorageService,
  ) {}
  public canActivate(): boolean | UrlTree {
    if (!this.localStorageService.getItem<User>(STORAGE_KEYS.USER)?.token) {
      this.routerService.setCurrentRoute();
      this.routerService.navigate(ROUTES.AUTH);

      return false;
    }

    return true;
  }
}
