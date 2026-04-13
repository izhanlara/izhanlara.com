import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsPageComponent } from '@pages/projects-page/projects-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Izhan Lara | Web Developer Portfolio',
    data: {
      seo: {
        title: 'Izhan Lara | Web Developer Portfolio',
        description:
          'Portfolio of Izhan Lara, a web developer building high-performance web experiences with Angular, Astro, and Node.',
        keywords:
          'Izhan Lara, web developer, frontend developer, Angular developer, Astro developer, Node developer, portfolio, web performance',
        path: '/',
        type: 'website',
      },
    },
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    title: 'Projects | Izhan Lara',
    data: {
      seo: {
        title: 'Projects | Izhan Lara',
        description:
          'Explore selected web development projects by Izhan Lara, including Angular, Astro, Node, dashboard, landing page, and frontend experiments.',
        keywords:
          'Izhan Lara projects, Angular projects, frontend portfolio, Astro projects, Node projects, web development case studies',
        path: '/projects',
        type: 'website',
      },
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
