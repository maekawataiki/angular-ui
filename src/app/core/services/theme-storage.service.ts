import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeStorage {
  private static storageKey = 'theme-storage-current-name';

  constructor() { }

  storeTheme(theme: string) {
    try {
      window.localStorage[ThemeStorage.storageKey] = theme;
    } catch {
      console.error("Store Theme Error")
    }
  }

  getStoredThemeName(): string {
    try {
      return window.localStorage[ThemeStorage.storageKey] || "";
    } catch {
      console.error("get Theme Error")
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorage.storageKey);
    } catch { }
  }
}
