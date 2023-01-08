import { Injectable } from "@angular/core";

import { Storage } from '../../utils/classes/storage/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Storage {
  public getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
