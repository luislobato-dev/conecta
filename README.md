# 🌈 CONECTA v2.0 - Sistema de Comunicación Aumentativa con IA

[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Claude AI](https://img.shields.io/badge/Powered%20by-Claude%20AI-FFD700)](https://claude.ai)

> Aplicación web profesional de comunicación aumentativa para personas con Trastorno del Espectro Autista (TEA), potenciada por Inteligencia Artificial.

**Desarrollado en colaboración con Claude AI by Anthropic**

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Tests
npm test

# Tests con UI
npm run test:ui
```

## ✨ Características Principales

### 💬 Comunicador Visual
- CRUD completo de pictogramas personalizados
- Generación automática con IA
- Categorías: Personas, Comida, Actividades, Emociones, Necesidades
- Síntesis de voz en español
- Cámara y video integrados

### 📅 Agenda Visual
- Calendario de anticipación
- Rutinas con pictogramas
- Líneas temporales paso a paso
- Generación de rutinas con IA

### ⏰ Sistema de Alarmas
- Recordatorios de medicación
- Programación por días
- Notificaciones visuales y sonoras

### 🤖 Asistente IA Claude
- Apoyo 24/7 para familias
- Consejos personalizados
- Estrategias de comunicación
- Análisis de patrones

### ❤️ Monitor de Salud
- Preparado para wearables
- Detección temprana de crisis
- Gráficos históricos

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript 5
- **Styling**: TailwindCSS 3
- **State**: Zustand 4
- **Validation**: Zod 3
- **Database**: Dexie (IndexedDB)
- **Build**: Vite 5
- **Testing**: Vitest + React Testing Library
- **AI**: Claude API (Anthropic)

## 📐 Arquitectura

Ver [ARCHITECTURE.md](ARCHITECTURE.md) para documentación detallada.

```
├── components/    # Componentes React
├── hooks/         # Custom hooks
├── services/      # APIs y BD
├── store/         # Estado global (Zustand)
├── types/         # TypeScript + Zod
└── utils/         # Utilidades
```

### Principios

✅ **Zero Runtime Errors** - TypeScript strict + Zod validation  
✅ **Offline First** - IndexedDB + Service Worker  
✅ **Type Safe** - 100% tipado estricto  
✅ **Tested** - Unit + Integration tests  
✅ **Accessible** - WCAG 2.1 AA compliant  
✅ **Performant** - React.memo + lazy loading  

## 🧪 Testing

```bash
# Tests unitarios
npm test

# Tests con cobertura
npm run test:coverage

# Tests con UI interactiva
npm run test:ui

# Type checking
npm run type-check
```

### Cobertura Objetivo
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

## 📦 Build y Deploy

```bash
# Build de producción
npm run build

# Preview del build
npm run preview
```

### Deploy en GitHub Pages

```bash
# 1. Build
npm run build

# 2. Deploy (configurar en package.json)
npm run deploy
```

## 🔒 Seguridad y Privacidad

- ✅ **Datos locales**: Todo se guarda en IndexedDB (navegador)
- ✅ **Sin tracking**: Cero analíticas o seguimiento
- ✅ **Validación estricta**: Zod en todos los inputs
- ✅ **Sanitización**: Inputs sanitizados antes de guardar
- ⚠️ **API Claude**: Mensajes al asistente se envían a Anthropic

## 🌍 Internacionalización

Actualmente disponible en:
- 🇪🇸 Español (disponible)
- 🇬🇧 English (próximamente)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guidelines

- Seguir los [TypeScript guidelines](https://basarat.gitbook.io/typescript/styleguide)
- Tests para nuevas funcionalidades
- Documentar funciones complejas
- Mantener cobertura > 80%

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE)

Copyright (c) 2026 CONECTA

## 🙏 Créditos

### Desarrollo
- **Concepto**: Inspirado en necesidades reales de familias con TEA
- **Desarrollo**: Claude AI by Anthropic
- **Investigación**: Basado en trabajos de Navarro (2010) y Muñumel (2017)

### Colaboradores
- Anthropic - Claude AI
- Comunidad de código abierto

### Inspiración
Dedicado a todas las familias con niños con TEA que luchan diariamente por comunicarse y conectar con sus seres queridos.

## 📞 Soporte

- 📖 [Documentación](docs/)
- 💬 [Discussions](https://github.com/usuario/conecta/discussions)
- 🐛 [Reportar Bug](https://github.com/usuario/conecta/issues)
- ✉️ Email: contacto@conecta-app.com

## 🗺️ Roadmap

### v2.1 (Q2 2026)
- [ ] Integración real con wearables
- [ ] Modo multidioma
- [ ] Sincronización en nube (opcional)
- [ ] App móvil nativa

### v2.5 (Q3 2026)
- [ ] Reconocimiento de emociones por IA
- [ ] Generación de historias sociales
- [ ] Comunidad de pictogramas compartidos

### v3.0 (Q4 2026)
- [ ] Modo colaborativo para terapeutas
- [ ] Dashboard de analytics
- [ ] Exportación de informes PDF

---

<div align="center">

**Desarrollado con ❤️ en colaboración con Claude AI**

![Claude AI Logo](https://img.shields.io/badge/Powered%20by-Claude%20AI-FFD700?style=for-the-badge)

[⬆️ Volver Arriba](#-conecta-v20---sistema-de-comunicación-aumentativa-con-ia)

</div>
