import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeStorage } from './theme-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: string = "indigo-theme";
  public currentDark: string = "";

  public options: any = [
    { name: 'indigo-theme', label: 'Indigo', primary: '#3f51b5' },
    { name: 'yellow-theme', label: 'Yellow', primary: '#FBC02D' },
    { name: 'icicle-theme', label: 'Icicle', primary: '#bbdefb' },
    { name: 'red-theme', label: 'Red', primary: '#d50000' },
    { name: 'green-theme', label: 'Green', primary: '#4CAF50' },
    { name: 'mono-theme', label: 'Mono', primary: '#616161' }
  ]

  constructor(
    private themeStorage: ThemeStorage,
    private overlayContainer: OverlayContainer) {
  }

  initTheme() {
    this.setTheme(this.themeStorage.getStoredThemeName());
    this.setDark(this.themeStorage.getStoredDark());
  }

  toggleDark(){
    this.setDark(this.currentDark ? "" : "dark");
  }

  setTheme(theme: string): void {
    this.setOverlayTheme(this.currentTheme, theme);
    this.themeStorage.storeTheme(theme);
    this.currentTheme = theme;
  }

  setDark(dark: string): void {
    this.setOverlayDark(this.currentDark, dark);
    this.themeStorage.storeDark(dark);
    this.currentDark = dark;
  }

  private setOverlayTheme(oldToken: string, newToken: string): void {
    if (oldToken) {
      this.overlayContainer.getContainerElement().classList.remove(oldToken);
    }
    if (newToken) {
      this.overlayContainer.getContainerElement().classList.add(newToken);
    }
  }

  private setOverlayDark(oldToken: string, newToken: string): void {
    if (oldToken && !newToken) {
      this.overlayContainer.getContainerElement().classList.remove("dark");
    } else if (!oldToken && newToken) {
      this.overlayContainer.getContainerElement().classList.add("dark");
    }
  }

  clearCache(){
    this.themeStorage.clearCache();
  }
  
}
