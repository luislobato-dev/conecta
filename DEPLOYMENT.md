# 🚀 Guía de Deployment en GitHub

## 📦 Preparación del Repositorio

### 1. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com/new)
2. Nombre: `conecta-app` (o el que prefieras)
3. Descripción: "Sistema de Comunicación Aumentativa con IA para personas con TEA"
4. Público o Privado (recomendado: Público para compartir)
5. **NO** añadas README, .gitignore o LICENSE (ya los tenemos)
6. Click en "Create repository"

### 2. Subir Código al Repositorio

```bash
# En la carpeta del proyecto

# Inicializar git (si no está inicializado)
git init

# Añadir todos los archivos
git add .

# Primer commit
git commit -m "🎉 Initial commit - CONECTA v2.0"

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/conecta-app.git

# Subir código
git branch -M main
git push -u origin main
```

## 🌐 Deployment en GitHub Pages

### Método 1: GitHub Actions (Automático)

**Crear archivo `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

**Configurar GitHub Pages:**

1. Ve a Settings → Pages
2. Source: GitHub Actions
3. Save

**¡Listo!** Cada push a `main` deployará automáticamente.

### Método 2: Manual con gh-pages

```bash
# Instalar gh-pages
npm install -D gh-pages

# Añadir scripts en package.json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

**Configurar vite.config.ts:**

```typescript
export default defineConfig({
  base: '/conecta-app/', // Nombre de tu repo
  // ... resto de configuración
});
```

## 🔧 Variables de Entorno

Si necesitas variables de entorno en producción:

### GitHub Secrets

1. Settings → Secrets and variables → Actions
2. New repository secret
3. Añadir: `VITE_API_KEY` (ejemplo)

### Usar en workflow

```yaml
- name: Build
  run: npm run build
  env:
    VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
```

## ✅ Verificación Post-Deploy

Después del deploy, verifica:

- [ ] La app carga en `https://TU-USUARIO.github.io/conecta-app/`
- [ ] No hay errores en consola
- [ ] Las rutas funcionan correctamente
- [ ] Los assets (imágenes, fuentes) cargan bien
- [ ] La BD IndexedDB funciona
- [ ] El almacenamiento local persiste

## 🐛 Troubleshooting

### Error: 404 en rutas

**Solución**: Añadir `404.html` que redirija a `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0;url=/conecta-app/index.html">
  </head>
</html>
```

### Assets no cargan

**Solución**: Verificar `base` en `vite.config.ts`

```typescript
base: process.env.NODE_ENV === 'production' 
  ? '/conecta-app/' 
  : '/'
```

### Build falla

```bash
# Limpiar cache
rm -rf node_modules dist .vite
npm install
npm run build
```

## 📊 Analytics (Opcional)

Para trackear uso (sin violar privacidad):

```bash
npm install -D vite-plugin-pwa

# vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'CONECTA',
        short_name: 'CONECTA',
        description: 'Comunicación Aumentativa con IA',
        theme_color: '#4A90E2',
      },
    }),
  ],
});
```

## 🔄 Actualizar Deployment

```bash
# Hacer cambios
git add .
git commit -m "feat: nueva funcionalidad"
git push

# GitHub Actions deployará automáticamente
```

## 🌍 Custom Domain (Opcional)

1. Comprar dominio (ej: conecta-app.com)
2. Settings → Pages → Custom domain
3. Añadir dominio
4. Configurar DNS:
   - Tipo A: `185.199.108.153`
   - Tipo A: `185.199.109.153`
   - Tipo A: `185.199.110.153`
   - Tipo A: `185.199.111.153`

## 📱 Progressive Web App

Para hacer la app instalable:

**Crear `public/manifest.json`:**

```json
{
  "name": "CONECTA - Comunicación Aumentativa",
  "short_name": "CONECTA",
  "description": "Sistema de comunicación aumentativa con IA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4A90E2",
  "icons": [
    {
      "src": "/logo192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/logo512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## ✨ Badge para README

Añadir al README.md:

```markdown
[![Deploy](https://github.com/TU-USUARIO/conecta-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/TU-USUARIO/conecta-app/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://TU-USUARIO.github.io/conecta-app/)
```

---

## 🎉 ¡Deployment Completo!

Tu app estará disponible en:
**https://TU-USUARIO.github.io/conecta-app/**

Comparte el link con familias que lo necesiten. 🌈
