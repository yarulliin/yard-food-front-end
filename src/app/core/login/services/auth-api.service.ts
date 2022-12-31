import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Credentials } from '../utils/interfaces/login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) { }

  public auth(credentials: Credentials): Observable<any> {
    return this.httpClient.post<any>('', credentials);
  }
}
