import { Component } from '@angular/core';
import { NavBarComponent } from '@app/components/layout/navBar/navBar.component';
import { AboutComponent } from '@components/layout/about/about.component';
import { FooterComponent } from '@components/layout/footer/footer.component';
import { HeaderComponent } from '@components/layout/header/header.component';
import { ProjectsComponent } from '@components/layout/projects/projects.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: [],
  imports: [
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    NavBarComponent,
  ],
})
export class HomeComponent {}
