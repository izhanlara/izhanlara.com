import { DOCUMENT } from '@angular/common';
import { inject, Injectable, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { SeoRouteData } from '../model/seo.model';

const SITE_URL = 'https://izhanlara.com';
const DEFAULT_IMAGE = '/assets/img/logo.png';
const DEFAULT_SEO: SeoRouteData = {
  title: 'Izhan Lara | Web Developer Portfolio',
  description:
    'Portfolio of Izhan Lara, a web developer building high-performance web experiences with Angular, Astro, and Node.',
  keywords:
    'Izhan Lara, web developer, frontend developer, Angular developer, Astro developer, Node developer, portfolio, web performance',
  path: '/',
  type: 'website',
  image: DEFAULT_IMAGE,
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        startWith(null),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.applyRouteSeo());
  }

  private applyRouteSeo(): void {
    const activeRoute = this.getDeepestRoute(
      this.router.routerState.snapshot.root,
    );
    const routeSeo =
      (activeRoute.data['seo'] as Partial<SeoRouteData> | undefined) ?? {};
    const seo = { ...DEFAULT_SEO, ...routeSeo };
    const canonicalUrl = new URL(seo.path, SITE_URL).toString();
    const imageUrl = new URL(seo.image, SITE_URL).toString();

    this.title.setTitle(seo.title);

    this.updateNamedMetaTag('description', seo.description);
    this.updateNamedMetaTag('keywords', seo.keywords);
    this.updateNamedMetaTag('author', 'Izhan Lara');
    this.updateNamedMetaTag('robots', 'index, follow, max-image-preview:large');
    this.updateNamedMetaTag('twitter:card', 'summary_large_image');
    this.updateNamedMetaTag('twitter:title', seo.title);
    this.updateNamedMetaTag('twitter:description', seo.description);
    this.updateNamedMetaTag('twitter:image', imageUrl);

    this.updatePropertyMetaTag('og:site_name', 'Izhan Lara');
    this.updatePropertyMetaTag('og:locale', 'en_US');
    this.updatePropertyMetaTag('og:type', seo.type);
    this.updatePropertyMetaTag('og:title', seo.title);
    this.updatePropertyMetaTag('og:description', seo.description);
    this.updatePropertyMetaTag('og:url', canonicalUrl);
    this.updatePropertyMetaTag('og:image', imageUrl);

    this.setCanonicalUrl(canonicalUrl);
  }

  private getDeepestRoute(
    route: ActivatedRouteSnapshot,
  ): ActivatedRouteSnapshot {
    let currentRoute = route;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    return currentRoute;
  }

  private setCanonicalUrl(url: string): void {
    let canonicalLink = this.document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', url);
  }

  private updateNamedMetaTag(name: string, content: string): void {
    this.meta.updateTag({ name, content }, `name='${name}'`);
  }

  private updatePropertyMetaTag(property: string, content: string): void {
    this.meta.updateTag({ property, content }, `property='${property}'`);
  }
}
