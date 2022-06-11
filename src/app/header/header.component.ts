import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(theme => this.isDarkMode = theme)
  }
}
