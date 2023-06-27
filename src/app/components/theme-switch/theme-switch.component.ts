import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  themeModeText: string;
  isDarkMode: boolean;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.checkThemeMode();
  }

  onSwitchTheme(): void {
    this.darkModeService.toggle();
    this.checkThemeMode();
  }

  checkThemeMode() {
    let mode = JSON.parse(localStorage.getItem('dark-mode'));
    this.isDarkMode = mode.darkMode;
    this.themeModeText = this.isDarkMode ? 'Light Mode' : 'Dark Mode';
  }
}
