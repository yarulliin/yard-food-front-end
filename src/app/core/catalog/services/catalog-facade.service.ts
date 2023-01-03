import { Injectable } from '@angular/core';

import { BehaviorSubject, of } from 'rxjs';

import { CatalogApiService } from './catalog-api.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogFacadeService {
  private _items$: BehaviorSubject<any[] | null> = new BehaviorSubject<any[] | null>([
    { id: 123, name: 'KFC', img: 'https://hrlike.ru/wp-content/uploads/2020/11/kfc_png53.png', rate: 3.5 },
    { id: 123, name: 'Dodo', img: 'https://www.простоспб.рф/upload/medialibrary/a4b/a4b12fe564076b923ec29bfbaf889d24.png', rate: 4 },
    { id: 123, name: 'Азбука вкуса', img: 'https://www.sostav.ru/images/news/2021/09/21/2qawzf2e.png', rate: 4 },
  ]);

  public get items$(): BehaviorSubject<any[] | null> {
    return this._items$;
  }

  constructor(private catalogService: CatalogApiService) { }

  public setItems(value: any[], isRefresh = false): void {
    isRefresh
      ? this._items$.next(value)
      : this._items$.next([...this._items$.value || [], ...value]);
  }

  public getItems(): void {

  }
}
