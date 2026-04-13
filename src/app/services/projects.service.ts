import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly HTTP = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/projects';

  public getAllProjects(): Observable<Card[]> {
    return this.HTTP.get<Card[]>(this.API_URL).pipe(
      map((cards) =>
        cards.map((card) => ({
          ...card,
          imageUrl: card.imageUrl || 'assets/img/default-project-image.png',
        })),
      ),
      catchError(() => of([])),
    );
  }

  public getFeaturedProjects(): Observable<Card[]> {
    return this.getAllProjects().pipe(
      map((cards) => cards.filter((card) => card.featured).slice(0, 3)),
    );
  }
}
