import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() { }

  get options() {
    return this.themeService.options;
  }

  get currentTheme() {
    return this.themeService.currentTheme;
  }

  public setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

}
