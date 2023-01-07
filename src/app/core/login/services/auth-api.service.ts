import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { urls } from '../../../utils/consts/urls';

import { Credentials, User } from '../utils/interfaces/login.interfaces';

const { auth } = urls;

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private httpClient: HttpClient) { }

  public auth(credentials: Credentials): Observable<User> {
    return this.httpClient.post<User>(auth, credentials);
  }
}
