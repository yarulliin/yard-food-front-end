import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urls } from '../../../utils/consts/urls';
import { Observable } from 'rxjs';

const { profileInfo, profileOrders } = urls;

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {
  constructor(private httpClient: HttpClient) { }

  public getUserInfo(id: string): Observable<any> {
    return this.httpClient.get<any>(profileInfo(id));
  }

  public getUserOrders(id: string): Observable<any> {
    return this.httpClient.get<any>(profileOrders(id));
  }
}
