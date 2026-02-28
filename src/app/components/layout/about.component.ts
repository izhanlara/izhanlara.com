import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: ` <section class="about-section py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-6" id="sobre-mi">
          <h2
            class="text-3xl font-black tracking-tight text-slate-900 mb-8 flex items-center gap-3"
          >
            <span class="size-2 bg-primary rounded-full"></span>
            About me
          </h2>
          <p class="text-lg text-slate-500 leading-relaxed max-w-xl">
            I’m a Web Developer passionate about building high-performance, scalable, and
            well-structured digital experiences. My background combines strong frontend development
            with modern frameworks like Angular and React, together with solid backend foundations
            using Node.js, PHP, and SQL databases. I enjoy designing clean architectures, writing
            maintainable code, and creating interfaces that feel both intuitive and purposeful. My
            approach focuses on performance, scalability, and long-term maintainability rather than
            just visual impact. Beyond traditional web development, I’ve also worked on automation
            and AI-driven solutions, integrating APIs, building bots, and connecting platforms to
            streamline workflows and improve efficiency. I’m constantly learning, refining my craft,
            and pushing my projects toward cleaner structure, better performance, and more
            thoughtful design.
          </p>
        </div>

        <div class="lg:col-span-6" id="habilidades">
          <h2
            class="text-3xl font-black tracking-tight text-slate-900 mb-8 flex items-center gap-3"
          >
            <span class="size-2 bg-primary rounded-full"></span>
            Skills
          </h2>

          <div class="flex flex-wrap gap-3">
            <!-- Frontend -->
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Angular
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              React
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Astro
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              JavaScript
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              TypeScript
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              HTML5
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              CSS3
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Tailwind CSS
            </div>

            <!-- Backend -->
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Node.js
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              PHP
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              SQL (SQL-92/99)
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              MySQL
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              MVC
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              CRUD
            </div>

            <!-- CMS & Ecommerce -->
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              WordPress
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Shopify
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Yoast SEO
            </div>

            <!-- DevOps & Tools -->
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Git
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              GitHub
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Netlify
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              XAMPP
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Apache
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              ESLint
            </div>

            <!-- IA & Automatización -->
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              OpenAI API
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Microsoft Teams Bots
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Atlassian Rovo
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Confluence
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Discord Bots
            </div>
            <div
              class="px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-slate-900 font-bold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
            >
              Webhooks
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styleUrls: ['../components.css'],
})
export class AboutComponent {}
