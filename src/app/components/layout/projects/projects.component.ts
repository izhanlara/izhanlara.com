import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '@services/projects.service';
import { Card } from '../../../model/card.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [],
  imports: [CommonModule, RouterLink],
})
export class ProjectsComponent {
  private readonly projectsService = inject(ProjectsService);

  private readonly featuredProjects = toSignal(
    this.projectsService.getFeaturedProjects(),
    {
      initialValue: [] as Card[],
    },
  );

  public getFeaturedProjects(): Card[] {
    return this.featuredProjects();
  }

  public trackByProjectId(id: number, card: Card): number {
    return (card.id, card.id);
  }
}
