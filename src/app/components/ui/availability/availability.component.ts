import { Component } from '@angular/core';

@Component({
  selector: 'app-availability',
  template: `
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

    <div
      class="inline-flex items-center gap-3 px-5 py-2 rounded-full 
            bg-blue-50 text-blue-600 
            text-sm font-semibold uppercase tracking-wide
            border border-blue-100"
    >
      <span class="relative flex h-2.5 w-2.5">
        <span
          class="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-40 animate-ping"
        ></span>
        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
      </span>

      Available for new projects
    </div>
  `,
  styleUrls: [],
})
export class AvailabilityComponent {}
