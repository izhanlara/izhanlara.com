import { Component } from '@angular/core';
import { Theme } from '@model/theme.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class ToggleThemeComponent {
  public isDarkMode: boolean = false;

  public toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme: Theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.dataset['theme'] = theme;
    console.log(`Theme toggled to: ${theme}`);
  }
}

// https://tailwindcss.com/docs/dark-mode
