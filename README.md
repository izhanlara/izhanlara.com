# Izhanlara Portfolio

Portafolio personal desarrollado con Angular 21, SSR y Tailwind CSS.

Este proyecto muestra una landing principal y una sección de proyectos, con datos consumidos desde una API local simulada mediante json-server.

## Stack principal

- Angular 21 (standalone components)
- Angular SSR (renderizado en servidor)
- Tailwind CSS 4 + PostCSS
- Vitest (tests unitarios)
- json-server (API local para proyectos)

## Requisitos

- Node.js 20 o superior
- npm 11 o superior

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
npm run start
```

Inicia el servidor de desarrollo en http://localhost:4200.

```bash
npm run api
```

Inicia json-server en http://localhost:3000 usando src/app/Profile/projects.json.

```bash
npm run build
```

Genera el build de producción en dist/.

```bash
npm run watch
```

Build en modo desarrollo con watch.

```bash
npm run test
```

Ejecuta tests unitarios.

```bash
npm run serve:ssr:izhanlara3
```

Sirve la app SSR desde el output de dist/ (requiere haber hecho build antes).

## Flujo recomendado en local

1. Instalar dependencias.
2. Levantar la API local en una terminal:

   ```bash
   npm run api
   ```

3. Levantar la aplicación en otra terminal:

   ```bash
   npm run start
   ```

4. Abrir http://localhost:4200.

## Rutas principales

- / -> Home
- /projects -> Página de proyectos

## Estructura del proyecto

```text
src/
	app/
		components/
			layout/
				about/
				footer/
				header/
				navBar/
				projects/
			ui/
				availability/
		pages/
			home/
			projects-page/
		services/
			projects.service.ts
		Profile/
			profile.json
			projects.json
	main.ts
	main.server.ts
	server.ts
	styles.css
```

## Datos de proyectos

El servicio de proyectos consume la API local en:

```text
http://localhost:3000/projects
```

Puedes editar los datos desde:

```text
src/app/Profile/projects.json
```

## SSR

La app está preparada para renderizado en servidor con Angular SSR.

Archivos clave:

- src/main.server.ts
- src/server.ts
- src/app/app.routes.server.ts

## Notas

- El archivo src/app/Profile/profile.json existe pero está vacío actualmente.
- El proyecto usa assets públicos desde la carpeta public/.

## Licencia

Uso personal.
