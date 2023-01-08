import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { urls } from '../../../utils/consts/urls';

const { catalog, catalogWithId } = urls;

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {
  constructor(private httpClient: HttpClient) { }

  public getItems(): Observable<any> {
    return this.httpClient.get<any>(catalog);
  }

  public getItem(id: string): Observable<any> {
    return this.httpClient.get<any>(catalogWithId(id))
  }
}
