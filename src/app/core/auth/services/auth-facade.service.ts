import { Injectable } from '@angular/core';

import { Observable, shareReplay, tap } from 'rxjs';

import { AuthApiService } from './auth-api.service';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { RouterService } from '../../../services/router/router.service';

import { Credentials, User } from '../utils/interfaces/login.interfaces';

import { STORAGE_KEYS } from '../../../utils/enums/app.enums';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  private _user$: Observable<User>;

  public get user$(): Observable<User> {
    return this._user$;
  }

  constructor(
    private authService: AuthApiService,
    private localStorageService: LocalStorageService,
    private routerService: RouterService,
  ) { }

  public auth(credentials: Credentials): void {
    this._user$ = this.authService.auth(credentials).pipe(
      shareReplay(1),
      tap((user: User) => this.localStorageService.setItem<User>(STORAGE_KEYS.USER, user)),
      tap(() => this.routerService.navigate())
    );
  }
}
