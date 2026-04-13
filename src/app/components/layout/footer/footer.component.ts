import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [],
  imports: [],
})
export class FooterComponent {
  public readonly contactLink: FooterLink = {
    label: 'dev@izhanlara.com',
    href: 'mailto:dev@izhanlara.com',
  };

  public readonly socialLinks: FooterLink[] = [
    {
      label: 'GitHub',
      href: 'https://github.com/izhanlara',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/izhan-lara-garcía',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  public readonly footerLinks: FooterLink[] = [
    { label: 'Tech Stack', href: '#' },
    { label: 'CV', href: '#' },
  ];
}
