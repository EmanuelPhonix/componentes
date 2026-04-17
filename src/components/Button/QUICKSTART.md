# Quick Start - Button Component

## ⚡ Inicio Rápido (2 minutos)

### 1. **Copiar archivos a tu proyecto**
```
Tu Proyecto/
└── src/
    └── components/
        └── Button/              ← Copiar esta carpeta completa
            ├── Button.tsx
            ├── Button.css
            ├── types.ts
            ├── index.ts
            └── ...docs
```

### 2. **Importar en tu app**
```tsx
import Button from "@/components/Button";
```

### 3. **Usar el componente**
```tsx
<Button>Confirmar</Button>
```

---

## 🎨 Ejemplos Básicos (Copy-Paste)

### Botón Simple
```tsx
<Button>Hacer algo</Button>
```

### Con Variante y Tamaño
```tsx
<Button variant="secondary" size="lg">
  Cancelar
</Button>
```

### Con Click Handler
```tsx
<Button onClick={() => console.log("Clickeado!")}>
  Botón
</Button>
```

### Estado Deshabilitado
```tsx
<Button disabled>No disponible</Button>
```

### Estado Loading
```tsx
<Button isLoading loadingText="Guardando...">
  Guardar
</Button>
```

### Grupo de Botones
```tsx
<div style={{ display: "flex", gap: "12px" }}>
  <Button variant="primary">Aceptar</Button>
  <Button variant="secondary">Cancelar</Button>
  <Button variant="tertiary">Más info</Button>
</div>
```

### Con Ref (Control del DOM)
```tsx
const btnRef = useRef<HTMLButtonElement>(null);

<Button ref={btnRef}>Botón</Button>

// Usar el ref:
btnRef.current?.focus();
```

---

## 📋 Props Principales

| Prop | Tipo | Descripción |
|------|------|-------------|
| `variant` | `"primary" \| "secondary" \| "tertiary"` | Estilo visual |
| `size` | `"sm" \| "md" \| "lg"` | Tamaño |
| `isLoading` | `boolean` | Activa spinner |
| `loadingText` | `string` | Texto durante carga |
| `disabled` | `boolean` | Deshabilita |
| `fullWidth` | `boolean` | 100% ancho |
| `onClick` | `function` | Handler de click |
| `className` | `string` | Clases adicionales |

**+ Todas las props nativas de `<button>` HTML**

---

## 🎯 Casos de Uso Comunes

### Formulario
```tsx
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  await submitForm();
  setLoading(false);
};

<Button isLoading={loading} onClick={handleSubmit}>
  Enviar
</Button>
```

### Modal Confirmación
```tsx
<Button variant="primary" onClick={handleConfirm}>
  Sí, confirmar
</Button>
<Button variant="secondary" onClick={handleCancel}>
  Cancelar
</Button>
```

### Navegación
```tsx
<Button
  variant="secondary"
  onClick={() => navigate("/previous")}
  disabled={isFirstPage}
>
  ← Anterior
</Button>
```

---

## 🎪 Ver Todas las Variantes

Importa y usa el showcase:

```tsx
import { ButtonShowcase } from "@/components/Button/Button.showcase";

// En tu app:
<ButtonShowcase />
```

O revisa [Button.examples.tsx](./Button.examples.tsx) para más casos.

---

## 🎨 Personalizar Colores

Edita `Button.css` y busca `:root`:

```css
:root {
  --button-primary-base: #588a9d;      /* Cambiar aquí */
  --button-primary-light: #3ba0c7;
  --button-primary-dark: #1f5163;
  /* ... más variables */
}
```

O en tu CSS global:
```css
:root {
  --button-primary-base: #your-color;
}
```

---

## 📖 Documentación Completa

- **[README.md](./README.md)** - Guía completa
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Cómo funciona
- **[STRUCTURE.md](./STRUCTURE.md)** - Descripción de archivos
- **[Button.examples.tsx](./Button.examples.tsx)** - Casos prácticos

---

## ✅ Checklist de Integración

- [ ] Copié la carpeta Button a `src/components/`
- [ ] Importé el componente en mi app
- [ ] Probé con `<Button>Test</Button>`
- [ ] Leí los ejemplos
- [ ] Personalicé los colores (opcional)
- [ ] Agregué a mi componente padre

---

## 🆘 Troubleshooting

### No se ve el botón
```tsx
// Asegúrate de que Button.css está importado en Button.tsx
// Si no, agrega al top de Button.tsx:
import "./Button.css";
```

### Estilos no se aplican
```tsx
// Verifica que la ruta es correcta:
import Button from "@/components/Button";  // ✅ Correcto
import Button from "./Button/Button";      // ✅ También correcto
```

### TypeScript errors
```tsx
// Asegúrate de importar los tipos:
import { Button, ButtonProps } from "@/components/Button";

// O desde el archivo:
import type { ButtonProps } from "@/components/Button/types";
```

---

## 🚀 Siguientes Pasos

1. ✅ Integra el componente
2. 🎨 Personaliza si necesitas
3. 📚 Lee [ARCHITECTURE.md](./ARCHITECTURE.md) para entender la escalabilidad
4. 🔧 Extiende con nuevas variantes si lo necesitas
5. 🎯 ¡Úsalo en tu app!

---

## 💾 Resumen del Contenido

```
Archivos generados:
✅ Button.tsx          (105 líneas)  - Componente
✅ Button.css          (280 líneas)  - Estilos
✅ types.ts            (80 líneas)   - Tipos
✅ index.ts            (5 líneas)    - Exports
✅ Button.showcase.tsx (350 líneas)  - Demo visual
✅ Button.examples.tsx (450 líneas)  - Casos prácticos
✅ README.md           (250 líneas)  - Documentación usuario
✅ ARCHITECTURE.md     (450 líneas)  - Guía arquitectura
✅ STRUCTURE.md        (200+ líneas) - Mapa del proyecto
✅ QUICKSTART.md       (Este archivo)

Total: 2,000+ líneas de código + documentación
```

---

## 📞 Ayuda Rápida

| Necesito... | Ve a... |
|-------------|---------|
| Usar el botón | Este archivo + README.md |
| Ver ejemplos | Button.examples.tsx |
| Personalizar | Button.css |
| Entender código | ARCHITECTURE.md |
| Agregar variante | ARCHITECTURE.md #4 |
| Navegar archivos | STRUCTURE.md |

---

**¡Listo para usar! 🎉**

Ejecuta `<Button>Hola Mundo</Button>` y verás tu componente en acción.
