import { Injectable } from '@angular/core';
import { ProfileApiService } from './profile-api.service';

import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileFacadeService {
  private _info$: Observable<any>;
  private _orders$: Observable<any>;

  public get info$(): Observable<any> {
    return this._info$;
  }

  public get orders$(): Observable<any> {
    return this._orders$;
  }

  constructor(private profileService: ProfileApiService) { }

  public getUserInfo(id: string): void {
    this._info$ = this.profileService.getUserInfo(id).pipe(
      shareReplay(1),
    )
  }

  public getUserOrders(id: string): void {
    this._orders$ = this.profileService.getUserOrders(id).pipe(
      shareReplay(1),
    )
  }
}
