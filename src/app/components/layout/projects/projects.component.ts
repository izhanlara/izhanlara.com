import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <!-- Projects Section -->
    <section class="py-24 bg-gray-50 h-screen" id="projects">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p class="text-slate-500 text-lg">
              A selection of digital solutions focused on performance and scalability.
            </p>
          </div>
          <div class="h-px flex-grow bg-slate-200 hidden md:block mx-8 mb-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div
            class="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div class="aspect-video relative overflow-hidden bg-slate-100">
              <img
                class="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Customizable portfolio template built with Angular and Tailwind CSS"
                src="kitv1.png"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Angular</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Tailwind</span
                >
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Portfolio Kit v2</h3>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2">
                A customizable portfolio template built with Angular and Tailwind CSS.
              </p>
              <a
                class="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn"
                href="https://github.com/izhanlara/portfolio" target="_blank"
              >
                View Project
                <span
                  class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    xml:space="preserve"
                  >
                    <g
                      style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 89.149 43.644 L 30.968 15.53 c -0.918 -0.443 -1.983 0.225 -1.983 1.244 v 19.946 H 1.561 C 0.699 36.721 0 37.42 0 38.282 v 13.435 c 0 0.862 0.699 1.561 1.561 1.561 h 27.423 v 19.947 c 0 1.019 1.066 1.688 1.983 1.244 l 58.181 -28.114 C 90.284 45.808 90.284 44.192 89.149 43.644 z"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,122,255); fill-rule: nonzero; opacity: 1;"
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g></svg
                ></span
                >
              </a>
            </div>
          </div>
          <!-- Project Card 2 -->
          <div
            class="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div class="aspect-video relative overflow-hidden bg-slate-100">
              <img
                class="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Clean data visualization dashboard for SaaS metrics"
                src="naw.png"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Angular</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >SCSS</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >API</span
                >
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">NAW: News Around the World</h3>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2">
                NAW (News Around the World) is a news platform that keeps you informed about the most important global events. The app fetches real-time news from reliable sources and presents them in an organized and attractive way, supporting both English and Spanish.
              </p>
              <a
                class="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn"
                href="https://github.com/NAW-News-Around-the-World/NAW.github.io" target="_blank"
              >
                View Project
                <span
                  class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    xml:space="preserve"
                  >
                    <g
                      style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 89.149 43.644 L 30.968 15.53 c -0.918 -0.443 -1.983 0.225 -1.983 1.244 v 19.946 H 1.561 C 0.699 36.721 0 37.42 0 38.282 v 13.435 c 0 0.862 0.699 1.561 1.561 1.561 h 27.423 v 19.947 c 0 1.019 1.066 1.688 1.983 1.244 l 58.181 -28.114 C 90.284 45.808 90.284 44.192 89.149 43.644 z"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,122,255); fill-rule: nonzero; opacity: 1;"
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g></svg></span
                >
              </a>
            </div>
          </div>
                    <!-- Project Card 3 -->
          <div
            class="group bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div class="aspect-video relative overflow-hidden bg-slate-100">
              <img
                class="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Clean data visualization dashboard for SaaS metrics"
                src="isb.png"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Wordpress</span
                >
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">ISB Instalaciones</h3>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2">
                ISB Instalaciones is a company specializing in the installation of firefighting. The website was built using WordPress, providing an easy-to-manage platform for showcasing their services and projects.
            </p>
              <a
                class="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn"
                href="https://isbinstalaciones.com/" target="_blank"
              >
                View Project
                <span
                  class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    xml:space="preserve"
                  >
                    <g
                      style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 89.149 43.644 L 30.968 15.53 c -0.918 -0.443 -1.983 0.225 -1.983 1.244 v 19.946 H 1.561 C 0.699 36.721 0 37.42 0 38.282 v 13.435 c 0 0.862 0.699 1.561 1.561 1.561 h 27.423 v 19.947 c 0 1.019 1.066 1.688 1.983 1.244 l 58.181 -28.114 C 90.284 45.808 90.284 44.192 89.149 43.644 z"
                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,122,255); fill-rule: nonzero; opacity: 1;"
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g></svg></span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: [],
})
export class ProjectsComponent {}
