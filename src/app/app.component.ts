import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  offset: number = 0;

  constructor(public themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.initTheme();
  }

  onScroll(event) {
    this.offset = event.target.scrollTop;
  }

}
