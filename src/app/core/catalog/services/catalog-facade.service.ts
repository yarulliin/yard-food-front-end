import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";

import { CatalogApiService } from "./catalog-api.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogFacadeService {
  private _items$: BehaviorSubject<any[] | null> = new BehaviorSubject<any[] | null>(null);

  public get items$(): BehaviorSubject<any[] | null> {
    return this._items$;
  }

  constructor(private catalogService: CatalogApiService) { }

  public setItems(value: any[], isRefresh: boolean = false): void {
    isRefresh
      ? this._items$.next(value)
      : this._items$.next([...this._items$.value || [], ...value]);
  }

  public getItems(): void {

  }
}
