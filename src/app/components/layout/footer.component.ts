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
        <span class="material-symbols-outlined text-primary"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 39.513 55.325 c 3.025 2.742 7.948 2.741 10.973 0 L 90 19.504 v -1.041 c 0 -4.684 -3.797 -8.481 -8.481 -8.481 H 8.481 C 3.797 9.982 0 13.779 0 18.463 v 1.042 L 39.513 55.325 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(57,170,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<path d="M 57.203 62.733 c -3.422 3.103 -7.812 4.653 -12.203 4.653 c -4.391 0 -8.782 -1.551 -12.204 -4.653 L 0 33.002 v 40.535 c 0 4.684 3.797 8.481 8.481 8.481 h 73.038 c 4.684 0 8.481 -3.797 8.481 -8.481 V 33.002 L 57.203 62.733 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(57,170,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg></span>
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