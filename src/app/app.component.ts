import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-world-ranks';
  theme= 'light'

  constructor() { }

  ngOnInit(): void {
    // retrieve previously saved theme
    const theme = localStorage.getItem("theme" );
    this.saveTheme(theme);
  }

  saveTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute( "data-theme", theme );
    this.theme = theme;
  };

  switchTheme () {
    if (this.theme === "light") {
      this.saveTheme("dark");
    } else {
      this.saveTheme("light");
    }
  };
}
