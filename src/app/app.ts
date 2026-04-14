import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';
import { ButtonUpComponent } from './components/button-up/button-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonUpComponent],
  templateUrl: './app.html',
  styleUrls: [],
})
export class App {
  private readonly seoService = inject(SeoService);
}
