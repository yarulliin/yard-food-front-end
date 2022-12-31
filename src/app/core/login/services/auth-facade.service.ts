import { Injectable } from '@angular/core';

import { BehaviorSubject, shareReplay } from "rxjs";

import { AuthApiService } from "./auth-api.service";

import { Credentials } from "../utils/interfaces/login.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  private _user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public get user$(): BehaviorSubject<any> {
    return this._user$;
  }

  constructor(private authService: AuthApiService) { }

  public auth(credentials: Credentials): void {
    this.setUser(this.authService.auth(credentials).pipe(shareReplay(1)));
  }

  public setUser(user: any): void {
    this._user$.next(user);
  }
}
