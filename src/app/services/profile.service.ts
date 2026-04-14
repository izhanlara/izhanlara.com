import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ProfileData } from '../model/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly HTTP = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/profile';

  public getProfile(): Observable<ProfileData> {
    return this.HTTP.get<ProfileData>(this.API_URL).pipe(
      catchError(() =>
        of({
          aboutMe: '',
          skills: [],
        }),
      ),
    );
  }
}
