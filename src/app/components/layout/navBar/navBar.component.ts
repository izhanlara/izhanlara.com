import { Component } from '@angular/core';
import { ToggleThemeComponent } from '@app/components/toggle-theme/toggle-theme.component';
import { NavBarRouteData } from '@app/model/nav-bar.model';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: [],
  imports: [ToggleThemeComponent],
})
export class NavBarComponent {
  public routes: NavBarRouteData[] = [
    { title: 'Home', href: '#home' },
    { title: 'Projects', href: '#projects' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: 'mailto:dev@izhanlara.com' },
  ];
}
