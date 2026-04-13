import { Component } from '@angular/core';

import { AvailabilityComponent } from '@ui/availability/availability.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
  imports: [AvailabilityComponent],
})
export class HeaderComponent {}
