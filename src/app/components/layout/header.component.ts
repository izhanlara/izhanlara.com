import { Component } from '@angular/core';

import { AvailabilityComponent } from '../ui/availability/availability.component';

@Component({
  selector: 'app-header',
  template: ` 
  <section class="relative overflow-hidden py-20 lg:py-32 border-b border-slate-50 h-screen">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 flex flex-col gap-8">
        <app-availability/>
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
          IZHAN <br />
          LARA
        </h1>
        <p class="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed">
          Web Developer building high-performance web experiences with
          <span class="text-slate-900 font-semibold">Angular, Astro, and Node.</span>
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            class="flex h-14 px-8 items-center justify-center bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all text-lg"
            href="#proyectos"
          >
            See Projects
          </a>
          <a
            class="flex h-14 px-8 items-center justify-center border-2 border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg"
            href="mailto:hello@izhanlara.com"
          >
            Contact
          </a>
        </div>
      </div>
      <div class="lg:col-span-5 relative">
        <div
          class="relative z-10 bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-800 font-mono text-sm leading-relaxed overflow-hidden"
        >
          <div class="flex gap-2 mb-4 border-b border-slate-800 pb-3">
            <div class="size-3 rounded-full bg-red-500/30"></div>
            <div class="size-3 rounded-full bg-yellow-500/30"></div>
            <div class="size-3 rounded-full bg-green-500/30"></div>
          </div>
          <div class="text-blue-400">const</div>
          <div class="text-purple-400 inline">Project</div>
          <div class="text-slate-300 inline">= () =&gt; &#123;</div>
          <div class="pl-4">
            <div class="text-blue-400 mt-2">return</div>
            <div class="text-slate-300 inline">(</div>
            <div class="pl-4 text-emerald-400">
              &lt;div className="max-w-4xl"&gt;<br />
              <span class="pl-4">&lt;h1&gt;Building the future&lt;/h1&gt;</span><br />
              <span class="pl-4 text-slate-500">// Modern web apps</span><br />
              &lt;/div&gt;
            </div>
            <div class="text-slate-300">);</div>
          </div>
          <div class="text-slate-300">&#125;</div>
          <div
            class="absolute -bottom-4 -right-4 w-32 h-32 code-gradient blur-3xl opacity-20"
          ></div>
        </div>
        <!-- Decorative back elements -->
        <div class="absolute -top-10 -right-10 size-48 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>`,
    styleUrls: [],
    imports: [AvailabilityComponent]
})
export class HeaderComponent {}
