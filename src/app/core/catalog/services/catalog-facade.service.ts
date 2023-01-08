import { Injectable } from '@angular/core';

import { Observable, of, shareReplay } from 'rxjs';

import { CatalogApiService } from './catalog-api.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogFacadeService {
  private _items$: Observable<any[] | null> = of([{ id: 123, name: 'KFC', img: 'https://hrlike.ru/wp-content/uploads/2020/11/kfc_png53.png', rate: 3.5 }]);
  private _item$: Observable<any | null>;

  public get items$(): Observable<any[] | null> {
    return this._items$;
  }

  public get item$(): Observable<any> {
    return this._item$;
  }

  constructor(private catalogService: CatalogApiService) { }

  public getItems(): void {
    this._items$ = this.catalogService.getItems().pipe(
      shareReplay(1),
    );
  }

  public getItem(id: string): void {
    this._item$ = this.catalogService.getItem(id).pipe(
      shareReplay(1),
    );
  }
}
