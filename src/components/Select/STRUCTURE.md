# Select Component - File Structure

## Descripción General

La estructura del componente Select sigue el patrón establecido por los componentes Button e Input en el design system.

## Árbol de Archivos

```
src/components/Select/
│
├── 📄 Select.tsx                    # Componente principal
├── 🎨 Select.css                    # Estilos del componente
├── 🎭 Select.showcase.tsx           # Showcase de estados
├── 📚 Select.examples.tsx           # Ejemplos de uso
├── 🔷 types.ts                      # Tipos TypeScript
├── 📦 index.ts                      # Exportaciones públicas
│
├── 📖 README.md                     # Documentación general
├── ⚡ QUICKSTART.md                 # Guía rápida
├── 🏗️  ARCHITECTURE.md              # Detalles de arquitectura
└── 📑 STRUCTURE.md                  # Este archivo
```

## Descripción de Archivos

### 1. Select.tsx
**Componente principal - ~65 líneas**

```tsx
// Exporta:
export default forwardRef<HTMLSelectElement, SelectProps>(...)
```

Contiene:
- Renderización del elemento `<select>`
- Lógica de validación
- Render condicional de label y helper text
- Manejo de propiedades

### 2. Select.css
**Estilos del componente - ~200 líneas**

Secciones:
- Variables CSS
- Estilos del wrapper
- Estilos del label
- Estilos del select field
- Icono del dropdown
- Helper text
- Estados (default, hover, focus, valid, invalid, disabled)
- Responsive design

### 3. Select.showcase.tsx
**Demostración visual - ~150 líneas**

Muestra:
- 6 estados del select
- Tabla de especificaciones de diseño
- Ejemplos visuales de cada estado
- Instrucciones para el usuario

### 4. Select.examples.tsx
**Ejemplos prácticos - ~400 líneas**

Exporta:
1. `CountrySelectExample` - Selección de país
2. `DisabledSelectExample` - Campo deshabilitado
3. `ProfileFormExample` - Formulario multiselecty
4. `DependentSelectsExample` - Selects relacionados
5. `SelectWithErrorExample` - Manejo de errores
6. `ExamplesGallery` - Componente navegable

### 5. types.ts
**Definiciones TypeScript - ~35 líneas**

Define:
```tsx
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

### 6. index.ts
**Exportaciones públicas - 1 línea**

```tsx
export { default } from './Select';
export type { SelectProps, SelectOption } from './types';
```

### 7. README.md
**Documentación general - ~150 líneas**

Secciones:
- Características
- Uso básico
- Propiedades
- Estados de validación
- Ejemplo completo
- Especificaciones de diseño
- Accesibilidad
- Notas de implementación

### 8. QUICKSTART.md
**Guía rápida - ~100 líneas**

Secciones:
- Importación
- Uso simple
- Con etiqueta
- Con validación
- Controlado
- Con deshabilitado
- Tipos
- Ejemplos completos

### 9. ARCHITECTURE.md
**Documentación técnica - ~200 líneas**

Secciones:
- Estructura del proyecto
- Componente principal
- Tipos
- Estilos
- Showcase
- Examples
- Patrones de diseño
- Flujo de datos
- Accesibilidad
- Integración
- Extensibilidad
- Testing

### 10. STRUCTURE.md
**Este archivo - ~150 líneas**

Documentación del árbol de archivos y descripción de cada archivo.

## Comparación con Otros Componentes

### Button Component
```
Button/
├── Button.tsx
├── Button.css
├── Button.showcase.tsx
├── Button.examples.tsx
├── types.ts
├── index.ts
├── ARCHITECTURE.md
├── QUICKSTART.md
├── README.md
└── STRUCTURE.md
```

### Input Component
```
Input/
├── Input.tsx
├── Input.css
├── Input.showcase.tsx
├── Input.examples.tsx
├── types.ts
├── index.ts
├── README.md
└── types.ts
```

### Select Component (Nueva estructura)
Sigue exactamente el patrón de Button con toda la documentación completa.

## Patrones de Nombres

### Archivos de Código
- `Component.tsx` - Componente principal
- `Component.css` - Estilos
- `Component.showcase.tsx` - Demostración de estados
- `Component.examples.tsx` - Ejemplos de uso
- `types.ts` - Tipos TypeScript
- `index.ts` - Exportaciones

### Archivos de Documentación
- `README.md` - Documentación principal
- `QUICKSTART.md` - Guía de inicio rápido
- `ARCHITECTURE.md` - Detalles técnicos
- `STRUCTURE.md` - Descripción de archivos

## Importaciones Cruzadas

### Desde Select.tsx
```tsx
import './Select.css';
import { SelectProps } from './types';
```

### Desde Select.examples.tsx
```tsx
import Select from './Select';
import './Select.css';
```

### Desde Select.showcase.tsx
```tsx
import Select from './Select';
import './Select.css';
```

### Desde App.tsx
```tsx
import SelectShowcase from "@/components/Select/Select.showcase";
import { ExamplesGallery as SelectExamples } from "@/components/Select/Select.examples";
```

## Convenciones

### Nomenclatura
- PascalCase para componentes React
- UPPERCASE para constantes
- camelCase para variables y funciones
- kebab-case para clases CSS

### Estructura de Componentes
```tsx
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ prop1, prop2, ...props }, ref) => {
    return (
      <div className="select-wrapper">
        {/* Contenido */}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
```

### Clases CSS
```css
.select-wrapper      /* Contenedor principal */
.select             /* Componente principal */
.select__field      /* Elemento del select */
.select__icon       /* Icono interno */
.select--default    /* Modificador de estado */
.select--disabled   /* Modificador de estado */
.select-helper      /* Elemento auxiliar */
```

## Estadísticas

| Métrica | Count |
|---------|-------|
| Archivos totales | 10 |
| Archivos de código | 6 |
| Archivos de documentación | 4 |
| Líneas de código aprox. | 600 |
| Líneas de estilos aprox. | 200 |
| Líneas de documentación aprox. | 600 |

## Siguiente Paso

Para añadir un nuevo componente al design system, sigue esta estructura como referencia:

1. Crear carpeta `src/components/NuevoComponente/`
2. Crear `NuevoComponente.tsx` con forwardRef
3. Crear `NuevoComponente.css` con estilos
4. Crear `NuevoComponente.showcase.tsx` con estados
5. Crear `NuevoComponente.examples.tsx` con ejemplos
6. Crear `types.ts` con tipos
7. Crear `index.ts` con exportaciones
8. Crear documentación (README.md, QUICKSTART.md, etc)
9. Registrar en App.tsx para que sea accesible en la página
