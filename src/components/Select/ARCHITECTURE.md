# Select Component Architecture

## Estructura del Proyecto

```
Select/
├── Select.tsx                 # Componente principal
├── Select.css               # Estilos del componente
├── Select.showcase.tsx      # Demostración de todos los estados
├── Select.examples.tsx      # Ejemplos prácticos de uso
├── types.ts                 # Tipos TypeScript
├── index.ts                 # Exportaciones
├── README.md               # Documentación principal
├── QUICKSTART.md           # Guía de inicio rápido
├── STRUCTURE.md            # Estructura de archivos (este archivo)
└── ARCHITECTURE.md         # Documentación de arquitectura
```

## Componente Principal (Select.tsx)

### Responsabilidades
- Renderizar el elemento `<select>` nativo
- Aplicar clases CSS según el estado de validación
- Manejar el render del label y helper text
- Exportar opciones configurables

### Características Técnicas
- **ForwardRef**: Permite acceso directo al nodo DOM
- **Tipado genérico**: Soporta todas las propiedades de `HTMLSelectElement`
- **Props desestructuradas**: Suporta propiedades estándar de HTML

### Estado de Validación
```css
.select--default    /* Estado inicial */
.select--valid      /* Estado válido (verde) */
.select--invalid    /* Estado inválido (rojo) */
.select--disabled   /* Estado deshabilitado */
```

## Tipos (types.ts)

Define las interfaces TypeScript:

```typescript
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends HTMLSelectElement {
  validation?: 'default' | 'valid' | 'invalid';
  label?: string;
  helperText?: string;
  options?: SelectOption[];
  placeholder?: string;
}
```

## Estilos (Select.css)

Estructura de clases CSS:

```
.select-wrapper          /* Contenedor principal */
├── label               /* Etiqueta (si existe) */
├── .select             /* Contenedor del select */
│   ├── select__field   /* Elemento <select> nativo */
│   └── select__icon    /* Icono de dropdown (▼) */
└── .select-helper      /* Texto de ayuda/error */
```

### Estados CSS
- `.select--default`: Fondo azul claro, borde negro
- `.select--valid`: Fondo verde, borde negro
- `.select--invalid`: Fondo rojo, borde negro
- `.select--disabled`: Fondo gris, cursor not-allowed

## Showcase (Select.showcase.tsx)

Presenta todos los 6 estados del componente:

1. **Default State** - Estado inicial
2. **Hover State** - Simulado (instrucciones para el usuario)
3. **Focus State** - Con borde azul
4. **Disabled State** - Deshabilitado
5. **Valid State** - Verde con check
6. **Invalid State** - Rojo con X

Incluye una tabla con especificaciones de diseño (colores, bordes, etc).

## Examples (Select.examples.tsx)

Proporciona 5 ejemplos prácticos de uso:

1. **CountrySelectExample** - Selección de país con validación
2. **DisabledSelectExample** - Campo deshabilitado
3. **ProfileFormExample** - Formulario con múltiples selects
4. **DependentSelectsExample** - Selects dependientes (País → Estado)
5. **SelectWithErrorExample** - Manejo de errores personalizado

Componente `ExamplesGallery` que permite navegar entre ejemplos con botones.

## Patrones de Diseño

### 1. ForwardRef Pattern
```tsx
const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return <select ref={ref} {...props} />;
});
```

### 2. Compound Component Pattern
El select está compuesto de:
- Wrapper (`select-wrapper`)
- Label (opcional)
- Select field (`select` + `select__field`)
- Icon (`select__icon`)
- Helper text (opcional)

### 3. State Management
Los estados se manejan con clases CSS:
- Padre: `.select--{validation}`
- Hijo: `.select__field`, `.select__icon`

## Flujo de Datos

```
SelectProps
  ├── validation → className
  ├── label → <label> element
  ├── options → <option> elements
  ├── placeholder → <option value="">
  └── helperText → .select-helper

SelectProps (HTML) 
  ├── disabled → select[disabled]
  ├── value → select[value]
  ├── defaultValue → select[defaultValue]
  └── onChange, onBlur, etc → select events
```

## Accesibilidad

### Semántica
- Usa elemento `<select>` nativo (semántica correcta)
- Label asociado opcionalmente
- Helper text relacionado al campo

### Navegación
- Tab: navega al siguiente elemento
- Tab + Shift: navega al elemento anterior
- Arrow Up/Down: selecciona opciones (navegador maneja esto)
- Enter: confirma selección

### Estilos para A11y
- Focus ring visible (`:focus-visible`)
- Contraste de colores WCAG AAA
- Estados claramente diferenciados

## Integración en la Aplicación

### Registro en App.tsx
```tsx
import SelectShowcase from '@/components/Select/Select.showcase';
import { ExamplesGallery as SelectExamples } from '@/components/Select/Select.examples';

// En el routing:
{currentPage === "select-showcase" && <SelectShowcase />}
{currentPage === "select-examples" && <SelectExamples />}
```

### Importación en Aplicaciones Reales
```tsx
import Select from '@/components/Select';
// O
import Select from '@/components/Select/Select';
```

## Extensibilidad

### Personalización vía CSS
```css
.select__field {
  /* Personalizar estilos del select */
}

.select-helper {
  /* Personalizar texto de ayuda */
}
```

### Extensión del componente
```tsx
// Crear un wrapper personalizado
export function MyCustomSelect(props) {
  return <Select {...props} className="my-custom-class" />;
}
```

## Testing

Puntos clave a testear:
- [ ] Cambio de valor
- [ ] Cambio de estado de validación
- [ ] Campo deshabilitado
- [ ] Render de opciones
- [ ] Render de placeholder
- [ ] Render de label y helper text
- [ ] ForwardRef funciona correctamente
