import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '@components/layout/footer/footer.component';
import { Card } from '@model/card.model';
import { ProjectsService } from '@services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: [],
  imports: [CommonModule, FooterComponent, RouterLink],
})
export class ProjectsPageComponent {
  private readonly projectsService = inject(ProjectsService);
  public readonly projects$ = this.projectsService.getAllProjects();

  public trackByProjectId(id: number, card: Card): number {
    return card.id;
  }
}
