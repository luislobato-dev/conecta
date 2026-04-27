# 🏗️ Arquitectura de CONECTA v2.0

## 📐 Estructura del Proyecto

```
conecta-app/
├── src/
│   ├── components/          # Componentes React
│   │   ├── common/          # Componentes reutilizables
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── comunicador/     # Módulo comunicador
│   │   │   ├── ItemCard.tsx
│   │   │   ├── ItemGrid.tsx
│   │   │   ├── CategorySelector.tsx
│   │   │   ├── AddItemModal.tsx
│   │   │   └── PictogramGenerator.tsx
│   │   ├── agenda/          # Módulo agenda
│   │   │   ├── Calendar.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── RoutineCard.tsx
│   │   │   └── AddRoutineModal.tsx
│   │   ├── alarmas/         # Módulo alarmas
│   │   │   ├── AlarmCard.tsx
│   │   │   ├── AlarmList.tsx
│   │   │   └── AddAlarmModal.tsx
│   │   ├── asistente/       # Módulo IA
│   │   │   ├── ChatInterface.tsx
│   │   │   ├── Message.tsx
│   │   │   └── QuickActions.tsx
│   │   └── salud/           # Módulo salud
│   │       ├── HealthStats.tsx
│   │       ├── HealthChart.tsx
│   │       └── WearableConnect.tsx
│   │
│   ├── hooks/               # Custom Hooks
│   │   ├── useItems.ts      # CRUD de items
│   │   ├── useRoutines.ts   # CRUD de rutinas
│   │   ├── useAlarms.ts     # CRUD de alarmas
│   │   ├── useProfile.ts    # Gestión de perfil
│   │   ├── useAI.ts         # Interacción con Claude API
│   │   ├── useSpeech.ts     # Síntesis de voz
│   │   └── useCamera.ts     # Acceso a cámara
│   │
│   ├── services/            # Servicios
│   │   ├── database.ts      # Dexie/IndexedDB
│   │   ├── claudeAPI.ts     # Integración Claude
│   │   ├── pictogramGen.ts  # Generación pictogramas
│   │   ├── speechSynthesis.ts
│   │   └── notifications.ts
│   │
│   ├── store/               # Estado global (Zustand)
│   │   ├── useAppStore.ts   # Store principal
│   │   ├── useUIStore.ts    # Estado de UI
│   │   └── slices/          # Slices del store
│   │       ├── itemsSlice.ts
│   │       ├── routinesSlice.ts
│   │       ├── alarmsSlice.ts
│   │       └── profileSlice.ts
│   │
│   ├── types/               # TypeScript types
│   │   ├── schemas.ts       # Zod schemas
│   │   └── index.ts         # Re-exports
│   │
│   ├── utils/               # Utilidades
│   │   ├── errors.ts        # Manejo de errores
│   │   ├── validators.ts    # Validaciones
│   │   ├── formatters.ts    # Formateo de datos
│   │   └── constants.ts     # Constantes
│   │
│   ├── styles/              # Estilos
│   │   └── globals.css      # TailwindCSS
│   │
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Types de Vite
│
├── tests/                   # Tests
│   ├── unit/
│   ├── integration/
│   └── setup.ts
│
├── public/                  # Assets estáticos
├── .eslintrc.json
├── .prettierrc
├── tailwind.config.js
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🎯 Principios de Arquitectura

### 1. **Separación de Responsabilidades**
- **Components**: Solo presentación y UI
- **Hooks**: Lógica de negocio reutilizable
- **Services**: Comunicación con APIs externas y BD
- **Store**: Estado global de la aplicación
- **Types**: Validación y tipado estricto

### 2. **Manejo de Errores en Capas**
```typescript
UI Layer → Hooks Layer → Services Layer → External APIs
   ↓           ↓              ↓                ↓
Toast      try/catch      try/catch        HTTP errors
```

### 3. **Flujo de Datos Unidireccional**
```
User Action → Component → Hook → Service → Database/API
                ↓
            Update Store
                ↓
            Re-render UI
```

### 4. **Validación con Zod**
Todos los datos se validan en múltiples puntos:
- Input del usuario (formularios)
- Antes de guardar en BD
- Al recibir datos de APIs
- Al cargar datos de BD

### 5. **Testing Strategy**
- **Unit Tests**: Funciones puras, utils, validators
- **Integration Tests**: Hooks, servicios
- **E2E Tests**: Flujos completos de usuario

## 🔐 Gestión de Errores

### Tipos de Errores Manejados

```typescript
// 1. Errores de Validación (Zod)
try {
  ItemSchema.parse(data);
} catch (error) {
  if (error instanceof z.ZodError) {
    // Mostrar errores de validación
  }
}

// 2. Errores de Base de Datos
try {
  await db.items.add(item);
} catch (error) {
  if (error.name === 'ConstraintError') {
    // Item duplicado
  }
}

// 3. Errores de API
try {
  await fetch('https://api.anthropic.com/...');
} catch (error) {
  if (error instanceof TypeError) {
    // Error de red
  }
}

// 4. Errores de Permisos
try {
  await navigator.mediaDevices.getUserMedia({ video: true });
} catch (error) {
  if (error.name === 'NotAllowedError') {
    // Permiso denegado
  }
}
```

## 📊 Estado Global (Zustand)

```typescript
interface AppState {
  // Items
  items: Item[];
  addItem: (item: CreateItemInput) => Promise<void>;
  updateItem: (id: string, data: Partial<Item>) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  
  // Routines
  routines: Routine[];
  addRoutine: (routine: CreateRoutineInput) => Promise<void>;
  
  // Alarms
  alarms: Alarm[];
  toggleAlarm: (id: string) => Promise<void>;
  
  // Profile
  profile: UserProfile | null;
  updateProfile: (data: UpdateUserProfileInput) => Promise<void>;
  
  // UI State
  isLoading: boolean;
  error: AppError | null;
  setError: (error: AppError | null) => void;
}
```

## 🧪 Testing

### Ejemplo de Test Unitario

```typescript
// tests/unit/validators.test.ts
import { describe, it, expect } from 'vitest';
import { ItemSchema } from '@/types/schemas';

describe('ItemSchema', () => {
  it('debe validar un item correcto', () => {
    const item = {
      id: crypto.randomUUID(),
      name: 'Test',
      category: 'comida',
      media: null,
      mediaType: null,
      emoji: '🍕',
      usageCount: 0,
      aiGenerated: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    expect(() => ItemSchema.parse(item)).not.toThrow();
  });
  
  it('debe fallar con nombre vacío', () => {
    const item = { /* ... */ name: '' };
    
    expect(() => ItemSchema.parse(item)).toThrow();
  });
});
```

## 🚀 Performance

### Optimizaciones Implementadas

1. **React.memo** en componentes que no cambian frecuentemente
2. **useMemo** y **useCallback** para evitar re-renders
3. **Lazy loading** de componentes pesados
4. **Virtual scrolling** para listas largas
5. **Debouncing** en búsquedas y filtros
6. **IndexedDB** para persistencia rápida
7. **Service Worker** para offline-first

## 🔒 Seguridad

1. **Sanitización** de inputs de usuario
2. **Validación** estricta con Zod
3. **CSP** headers configurados
4. **No almacenamiento** de datos sensibles
5. **Encriptación** de datos exportados (opcional)

## 📱 Responsive Design

- **Mobile First** approach
- **TailwindCSS** para estilos
- **Touch-friendly** UI elements
- **Accesibilidad** (WCAG 2.1 AA)

## 🔄 CI/CD Pipeline

```yaml
Build → Lint → Type Check → Test → Build → Deploy
  ↓       ↓         ↓         ↓       ↓       ↓
Vite   ESLint    TSC      Vitest  Dist   GitHub Pages
```

## 📦 Deployment

- **GitHub Pages** para hosting
- **Vite build** optimizado
- **PWA** capabilities
- **Automatic updates**
