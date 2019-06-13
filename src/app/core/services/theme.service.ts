import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeStorage } from './theme-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: string = "";

  public options: any = [
    { name: '', label: 'Light', primary: '#3f51b5' },
    { name: 'dark-theme', label: 'Dark', primary: '#fdd835' },
    { name: 'icicle-theme', label: 'Icicle', primary: '#bbdefb' },
    { name: 'volcano-theme', label: 'Volcano', primary: '#d50000' }
  ]

  constructor(
    private themeStorage: ThemeStorage,
    private overlayContainer: OverlayContainer) {
  }

  initTheme() {
    console.log("initTheme");
    this.setTheme(this.themeStorage.getStoredThemeName());
  }

  setTheme(theme: string): void {
    this.setOverlayClass(this.currentTheme, theme);
    this.themeStorage.storeTheme(theme);
    this.currentTheme = theme;
  }

  private setOverlayClass(oldToken: string, newToken: string): void {
    if (oldToken) {
      this.overlayContainer.getContainerElement().classList.remove(oldToken);
    }
    if (newToken) {
      this.overlayContainer.getContainerElement().classList.add(newToken);
    }
  }
  
}
