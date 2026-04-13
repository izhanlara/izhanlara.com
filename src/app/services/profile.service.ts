import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

export interface ProfileData {
  aboutMe: string;
  skills: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly HTTP = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/profile';

  getProfile(): Observable<ProfileData> {
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
