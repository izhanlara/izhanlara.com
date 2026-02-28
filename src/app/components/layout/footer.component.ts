import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
    <section class="py-24 bg-slate-900 text-white rounded-t-[3rem] mt-12">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-6">Do you have a project in mind?</h2>
    <p class="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Let's talk about how I can help you build your next great digital idea.</p>
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
      <a class="flex items-center gap-3 text-lg font-bold hover:text-primary transition-colors group" href="mailto:dev@izhanlara.com">
        <span class="material-symbols-outlined text-primary">mail</span>
        dev@izhanlara.com
      </a>
      <span class="hidden md:block text-slate-700">|</span>
      <div class="flex items-center gap-8">
        <a class="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-medium" href="https://github.com/izhanlara" target="_blank">
          GitHub
        </a>
        <a class="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-medium" href="https://www.linkedin.com/in/izhan-lara-garcía" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
    <div class="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
      <div class="flex gap-8">
        <a class="hover:text-slate-300 transition-colors" href="#">Tech Stack</a>
        <a class="hover:text-slate-300 transition-colors" href="#">CV</a>
      </div>
    </div>
  </div>
</section>`,

    styleUrls: []
})

export class FooterComponent {}