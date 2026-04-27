# 🚀 Guía de Instalación de CONECTA v2.0

## ⚡ Inicio Rápido (5 minutos)

```bash
# 1. Clonar o descargar el proyecto
cd conecta-app

# 2. Instalar dependencias
npm install

# 3. Iniciar en modo desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:3000
```

## 📋 Requisitos Previos

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Navegador moderno**: Chrome, Firefox, Safari, Edge (últimas versiones)

### Verificar versiones

```bash
node --version  # Debe ser >= 18
npm --version   # Debe ser >= 9
```

## 📦 Instalación Completa

### 1. Descargar el Proyecto

**Opción A: Desde GitHub**
```bash
git clone https://github.com/tu-usuario/conecta-app.git
cd conecta-app
```

**Opción B: Archivo ZIP**
1. Descargar ZIP
2. Extraer a una carpeta
3. Abrir terminal en esa carpeta

### 2. Instalar Dependencias

```bash
npm install
```

Esto instalará:
- React 18
- TypeScript 5
- TailwindCSS 3
- Zustand 4
- Zod 3
- Dexie (IndexedDB)
- Vitest (testing)
- Y todas las demás dependencias

**Tiempo estimado**: 2-3 minutos

### 3. Verificar Instalación

```bash
# Verificar que TypeScript compile sin errores
npm run type-check

# Ejecutar tests
npm test

# Todo debe pasar ✅
```

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo (puerto 3000)
npm run build        # Compila para producción
npm run preview      # Preview del build de producción

# Testing
npm test             # Ejecuta tests en watch mode
npm run test:ui      # Abre UI interactiva de tests
npm run test:coverage # Genera reporte de cobertura

# Code Quality
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos de TypeScript
```

## 🌐 Configuración para Producción

### Build para GitHub Pages

```bash
# 1. Build
npm run build

# 2. La carpeta dist/ contiene los archivos compilados
# 3. Subir dist/ a GitHub Pages o cualquier hosting estático
```

### Variables de Entorno (Opcional)

Crear archivo `.env` en la raíz:

```env
# No se necesitan variables por defecto
# La app funciona 100% local

# Opcional: Habilitar logs de desarrollo
VITE_DEBUG=true
```

## ❓ Troubleshooting

### Error: "Cannot find module"

```bash
# Limpiar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"

```bash
# Cambiar puerto en vite.config.ts
# O usar:
npm run dev -- --port 3001
```

### Error en TypeScript

```bash
# Limpiar cache de TypeScript
rm -rf node_modules/.vite
npm run dev
```

### Tests fallan

```bash
# Verificar que jsdom esté instalado
npm install -D jsdom

# Ejecutar tests en modo verbose
npm test -- --reporter=verbose
```

## 📱 Instalar como PWA

1. Abrir la app en navegador
2. En Chrome: Menú > "Instalar CONECTA"
3. En iOS Safari: Compartir > "Añadir a pantalla de inicio"

## 🔧 Configuración del IDE

### VS Code (Recomendado)

Extensiones recomendadas:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "vitest.explorer"
  ]
}
```

### Settings recomendados (.vscode/settings.json)

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## 📊 Estado del Proyecto

### ✅ Completado (30%)

- [x] Configuración base (Vite, TypeScript, Tailwind)
- [x] Sistema de tipos con Zod
- [x] Base de datos (Dexie/IndexedDB)
- [x] Store global (Zustand)
- [x] Servicio de Claude API
- [x] Servicio de síntesis de voz
- [x] Hook de items (CRUD)
- [x] Setup de testing
- [x] App.tsx básica funcional

### 🔨 Pendiente (70%)

Ver `TODO.md` para lista completa:
- [ ] Hooks restantes (useRoutines, useAlarms, useAI)
- [ ] Componentes de UI
- [ ] Routing (React Router)
- [ ] Tests completos

## 🎯 Próximos Pasos

1. **Revisar** `TODO.md` - Lista de archivos pendientes
2. **Leer** `ARCHITECTURE.md` - Arquitectura detallada
3. **Crear** componentes según necesites
4. **Deployar** cuando esté listo

## 💡 Tips

- **Desarrollo**: Usa `npm run dev` y deja el servidor corriendo
- **Testing**: Usa `npm run test:ui` para debugging visual
- **Deployment**: `npm run build` crea carpeta `dist/` optimizada
- **Debugging**: Usa React DevTools + Redux DevTools

## 📞 Soporte

- 📖 Ver `README.md` para info general
- 🏗️ Ver `ARCHITECTURE.md` para arquitectura
- 📝 Ver `TODO.md` para roadmap
- 🐛 GitHub Issues para reportar bugs

---

## ✅ Checklist de Instalación

- [ ] Node.js >= 18 instalado
- [ ] Proyecto descargado
- [ ] `npm install` ejecutado exitosamente
- [ ] `npm run dev` funciona
- [ ] App abre en http://localhost:3000
- [ ] No hay errores en consola
- [ ] Tests pasan (`npm test`)

Si todos los checks están ✅, **¡estás listo para desarrollar!** 🎉

---

**Tiempo total de setup**: ~5 minutos  
**Dificultad**: ⭐⭐ Intermedio
