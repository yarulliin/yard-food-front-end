import { Injectable } from "@angular/core";

import { Storage } from '../../utils/classes/storage/storage';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements Storage  {
  public getItem<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key) || '[]');
  }

  public setItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
