import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ProfileData, ProfileService } from '@services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../components.css'],
})
export class AboutComponent {
  private readonly profileService = inject(ProfileService);

  private readonly profile = toSignal(this.profileService.getProfile(), {
    initialValue: {
      aboutMe: '',
      skills: [],
    } as ProfileData,
  });

  public getProfile(): ProfileData {
    return this.profile();
  }
}
