import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './components/layout/navBar.component';
import {HeaderComponent} from './components/layout/header.component';
import { ProjectsComponent } from './components/layout/projects/projects.component';
import { AboutComponent } from './components/layout/about.component';
import { FooterComponent } from './components/layout/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeaderComponent, ProjectsComponent, AboutComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: []
})
export class App {
  protected readonly title = signal('Izhan Lara | Web Developer Portfolio');

  

}
