# 📝 Archivos Pendientes por Crear

## ✅ COMPLETADO

### Configuración
- [x] package.json
- [x] tsconfig.json
- [x] vite.config.ts
- [x] tailwind.config.js
- [x] vitest.config.ts
- [x] tests/setup.ts

### Tipos y Validación
- [x] src/types/schemas.ts

### Servicios
- [x] src/services/database.ts
- [x] src/services/claudeAPI.ts
- [x] src/services/speechSynthesis.ts

### Store
- [x] src/store/useAppStore.ts

### Hooks
- [x] src/hooks/useItems.ts

## 🔨 PENDIENTES (Estructura completa documentada)

### Hooks Restantes
```typescript
// src/hooks/useRoutines.ts - Similar a useItems
export function useRoutines() {
  // CRUD de rutinas
  // Filtrado por fecha
  // Rutinas del día
}

// src/hooks/useAlarms.ts - Similar a useItems
export function useAlarms() {
  // CRUD de alarmas
  // Toggle activo/inactivo
  // Programación de notificaciones
}

// src/hooks/useProfile.ts
export function useProfile() {
  // Gestión del perfil de usuario
  // Actualización de datos
}

// src/hooks/useAI.ts
export function useAI() {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const sendMessage = async (content: string) => {
    // Llamar a claudeAPI
    // Guardar en BD
  };
  
  return { messages, sendMessage, isLoading };
}
```

### Componentes Comunes
```typescript
// src/components/common/Button.tsx
export function Button({ children, variant, onClick, ... }) {
  return <button className={cn(...)}>{children}</button>;
}

// src/components/common/Modal.tsx
export function Modal({ isOpen, onClose, children }) {
  return <Dialog ...>{children}</Dialog>;
}

// src/components/common/Loading.tsx
export function Loading() {
  return <div className="spinner">...</div>;
}

// src/components/common/ErrorBoundary.tsx
export class ErrorBoundary extends React.Component {...}
```

### Componentes de Comunicador
```typescript
// src/components/comunicador/ItemCard.tsx
export function ItemCard({ item, onClick }: { item: Item }) {
  const { trackUsage } = useItems();
  const { speak } = useSpeech();
  
  const handleClick = () => {
    trackUsage(item.id);
    speak(item.name);
    onClick?.(item);
  };
  
  return <div onClick={handleClick}>...</div>;
}

// src/components/comunicador/ItemGrid.tsx
export function ItemGrid({ category }: { category: Category }) {
  const { getItemsByCategory } = useItems();
  const items = getItemsByCategory(category);
  
  return (
    <div className="grid ...">
      {items.map(item => <ItemCard key={item.id} item={item} />)}
    </div>
  );
}

// src/components/comunicador/CategorySelector.tsx
// src/components/comunicador/AddItemModal.tsx
// src/components/comunicador/PictogramGenerator.tsx
```

### Componentes de Agenda
```typescript
// src/components/agenda/Calendar.tsx
// src/components/agenda/Timeline.tsx
// src/components/agenda/RoutineCard.tsx
// src/components/agenda/AddRoutineModal.tsx
```

### Componentes de Alarmas
```typescript
// src/components/alarmas/AlarmCard.tsx
// src/components/alarmas/AlarmList.tsx
// src/components/alarmas/AddAlarmModal.tsx
```

### Componentes del Asistente
```typescript
// src/components/asistente/ChatInterface.tsx
export function ChatInterface() {
  const { messages, sendMessage, isLoading } = useAI();
  
  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <Input onSend={sendMessage} disabled={isLoading} />
    </div>
  );
}

// src/components/asistente/Message.tsx
// src/components/asistente/QuickActions.tsx
```

### App Principal
```typescript
// src/App.tsx
export function App() {
  const { initialize } = useAppStore();
  
  useEffect(() => {
    initialize();
  }, []);
  
  return (
    <ErrorBoundary>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Comunicador />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/alarmas" element={<Alarmas />} />
        <Route path="/asistente" element={<Asistente />} />
        <Route path="/salud" element={<Salud />} />
      </Routes>
      <Toaster />
    </ErrorBoundary>
  );
}

// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles/globals.css';
import { initializeDatabase } from '@/services/database';

initializeDatabase().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
```

### Estilos
```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Poppins:wght@600;700&display=swap');

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-gray-50 text-gray-900 font-sans;
  }
}
```

### HTML Base
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="CONECTA - Sistema de Comunicación Aumentativa con IA" />
    <title>CONECTA - Comunicación Aumentativa</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Tests
```typescript
// tests/unit/schemas.test.ts
import { describe, it, expect } from 'vitest';
import { ItemSchema } from '@/types/schemas';

describe('ItemSchema', () => {
  it('valida item correcto', () => {
    const item = { /* ... */ };
    expect(() => ItemSchema.parse(item)).not.toThrow();
  });
});

// tests/unit/database.test.ts
// tests/unit/store.test.ts
// tests/integration/items.test.ts
```

## 📝 RESUMEN

**Archivos creados**: 16  
**Archivos pendientes**: ~35  
**Completado**: ~30%

**Para completar el proyecto**:
1. Crear hooks restantes (useRoutines, useAlarms, useProfile, useAI)
2. Crear componentes comunes (Button, Modal, Loading, etc.)
3. Crear componentes de cada módulo
4. Crear App.tsx y main.tsx
5. Crear estilos globals.css
6. Crear index.html
7. Crear tests básicos

**Tiempo estimado**: 2-3 horas adicionales para crear todos los archivos

**Prioridad**:
1. ⭐⭐⭐ App.tsx + main.tsx + index.html (crítico para funcionar)
2. ⭐⭐⭐ Componentes comunes (Button, Modal, etc.)
3. ⭐⭐ Hooks restantes
4. ⭐⭐ Componentes de módulos
5. ⭐ Tests

¿Quieres que continúe creando los archivos críticos (App.tsx, main.tsx, index.html, componentes comunes)?
