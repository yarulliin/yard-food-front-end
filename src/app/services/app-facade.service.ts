import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppFacadeService {
  private _isLoaderActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get isLoaderActive$(): BehaviorSubject<boolean> {
    return this._isLoaderActive$;
  }

  public changeLoaderStatus(status: boolean): void {
    this._isLoaderActive$.next(status);
  }

  constructor() { }
}
