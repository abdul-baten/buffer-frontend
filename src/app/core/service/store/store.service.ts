import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  setToStorage(key: any, value: any): void {
    window.localStorage.setItem(key, value);
  }

  getFromStorage(key: any): any {
    return window.localStorage.getItem(key);
  }

  removeFromStorage(key: any): void {
    window.localStorage.removeItem(key);
  }

  clearStorage(): void {
    window.localStorage.clear();
  }
}
