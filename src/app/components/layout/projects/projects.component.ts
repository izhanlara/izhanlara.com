import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <!-- Projects Section -->
    <section class="py-24 bg-gray-50 h-screen" id="proyectos">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
              Proyectos Destacados
            </h2>
            <p class="text-slate-500 text-lg">
              Una selección de soluciones digitales enfocadas en rendimiento y escalabilidad.
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
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Screenshot of a modern minimalist e-commerce dashboard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnK7u54WF4VCC2HDYXlPkyVHkR5mW_8lcE2T-ppjOrlqPzk-l8PMlp1JoZ4bZ35xD4SkzD8GgHu_f-z1DWKLiDuuM3pNLsGeE-hM4ux1j1aAP0U9urbBQFqJMY-FWl4pFGm6MKidOfOnok7tIyhXeRCzrXv_8HX__hK9cfHv9kcP7DTZgOLC0zoA8xyI_9NAhERzDyOxEIauGe6JHkL2tR4maSjqoJYzZSdlb8_utxQBOYfS6J6Appo1cFxt4ZAtfGLXpLYuxbZvPv"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >React</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Tailwind</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >MySQL</span
                >
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">E-commerce Platform</h3>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2">
                Plataforma de comercio electrónico con gestión de inventario en tiempo real y
                pasarela de pagos integrada.
              </p>
              <a
                class="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn"
                href="#"
              >
                Ver proyecto
                <span
                  class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                  >arrow_forward</span
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
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Clean data visualization dashboard for SaaS metrics"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYPt1-a8LPq7pkPNG-ctmX227CGHybaT0S9IHcNdIM2w9NB_kntUoEfPXyiH8PozJR2UAH9WMB2xUeRlQgS6CZeKUCCQz90pIlRInk_GGaTFDwpDLSk0rPg2WHjQWST95nG3Tvjewf1JDbOip4NXmBKfyn-T-m6CLUx3HrzyqtIZHWnkYqbB88yNH4vItHY3BuqlDxURWkvlno7yMF6miKKhtdQykMT9wP1VTINfo06RzEj-MRCmAtvVI6RClgl2C6RQ6bKXLb8epN"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >PHP</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >WordPress</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >API</span
                >
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">SaaS Business Dashboard</h3>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2">
                Panel de administración personalizado para la gestión de métricas clave y
                automatización de reportes.
              </p>
              <a
                class="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn"
                href="#"
              >
                Ver proyecto
                <span
                  class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                  >arrow_forward</span
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
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Dark themed code editor with abstract UI elements"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVQ6v0Uo4CHnLisufP58vSoRtIyBgg1RJAXWP4udUGeu3oDkFyOdeablR4PpBJcT8lyg5PpZ0L5kwd-B3Q6ApQuS96CxLqZ2d_peQlbDIpkAHIh7yFOJ5rKyT4e_h8G5YjVvauJWD2nsiZmJgmpslAb2G76VKB7YNhNfLxUUTrE9TQbcohAhHbcPwS5Hcq7wW47lnqmOzI2tp_zci4gcTFTITtyiNqO3rTd5cz_vdVlhONUWziyPpmBQuM4zCRnHix7GH_a52J4l-v"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Next.js</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Netlify</span
                >
                <span
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                  >Git</span
                >
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Dev Portfolio Kit</h3>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2">
                Template optimizado para desarrolladores con soporte para MDX, temas claro/oscuro y
                despliegue rápido.
              </p>
              <a
                class="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn"
                href="#"
              >
                Ver proyecto
                <span
                  class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                  >arrow_forward</span
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
