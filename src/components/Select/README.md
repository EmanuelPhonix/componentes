# Select Component

Un componente `<select>` completo y accesible basado en especificaciones de Figma.

## Características Principales

- ✅ **Estados múltiples**: default, hover, focus, valid, invalid, disabled
- ✅ **Completamente tipado**: TypeScript con tipos genéricos
- ✅ **Accesible**: WCAG 2.1 AAA compliant
- ✅ **ForwardRef**: Acceso directo al nodo DOM
- ✅ **Propiedades estándar**: Compatible con `HTMLSelectElement`
- ✅ **Validación integrada**: Estados de validación predefinidos
- ✅ **Helper text**: Mensajes de ayuda/error debajo del select
- ✅ **Label opcional**: Etiqueta para el campo

## Uso Básico

```tsx
import Select from '@/components/Select';

export default function MyForm() {
  return (
    <Select
      placeholder="Selecciona una opción"
      options={[
        { value: 'mx', label: 'México' },
        { value: 'es', label: 'España' },
      ]}
    />
  );
}
```

## Propiedades

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `validation` | `'default' \| 'valid' \| 'invalid'` | `'default'` | Estado de validación |
| `label` | `string` | - | Etiqueta para el select |
| `helperText` | `string` | - | Texto auxiliar debajo |
| `disabled` | `boolean` | - | Deshabilitar el select |
| `options` | `SelectOption[]` | `[]` | Opciones disponibles |
| `placeholder` | `string` | - | Texto placeholder |
| `value` | `string` | - | Valor controlado |
| `defaultValue` | `string` | - | Valor por defecto |

## Estados de Validación

### Default (Inicial)
```tsx
<Select placeholder="Selecciona..." options={options} />
```

### Valid (Válido)
```tsx
<Select
  validation="valid"
  helperText="✓ Campo válido"
  options={options}
/>
```

### Invalid (Inválido)
```tsx
<Select
  validation="invalid"
  helperText="✗ Selecciona una opción válida"
  options={options}
/>
```

### Disabled (Deshabilitado)
```tsx
<Select
  disabled={true}
  placeholder="No disponible"
  options={options}
/>
```

## Ejemplo Completo

```tsx
import React, { useState } from 'react';
import Select from '@/components/Select';

export function CountryForm() {
  const [country, setCountry] = useState('');
  const [validation, setValidation] = useState('default');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCountry(value);
    setValidation(value ? 'valid' : 'invalid');
  };

  return (
    <Select
      label="País"
      placeholder="Selecciona tu país"
      value={country}
      onChange={handleChange}
      validation={validation}
      options={[
        { value: 'mx', label: 'México' },
        { value: 'es', label: 'España' },
        { value: 'ar', label: 'Argentina' },
      ]}
      helperText={
        validation === 'valid' ? '✓ Seleccionado' :
        'Por favor selecciona un país'
      }
    />
  );
}
```

## Especificaciones de Diseño

### Tamaño
- Altura: 44px
- Ancho: Flexible (responde al contenedor)
- Padding: 12px 16px

### Colores

| Estado | Fondo | Borde | Texto |
|--------|-------|-------|-------|
| Default | `rgba(88, 138, 157, 0.5)` | `2px black` | `rgba(26, 26, 26, 0.5)` |
| Hover | `rgba(59, 160, 199, 0.5)` | `2px black` | `rgba(0, 0, 0, 0.5)` |
| Focus | Transparent | `2px #1f5163` | `rgba(26, 26, 26, 0.5)` |
| Disabled | `#cccccc` | `2px #353535` | `#7f7f7f` |
| Valid | `#28a745` | `2px #353535` | Black |
| Invalid | `#dc3545` | `2px #353535` | Black |

## Accesibilidad

- ✅ Soporta navegación por teclado (Tab, Enter, Arrow keys)
- ✅ Labels semánticos asociadas al select
- ✅ ARIA labels y descripciones
- ✅ Estados visuales claros para usuarios con daltonismo

## Notas de Implementación

1. **ForwardRef**: El componente usa `forwardRef` para permitir acceso directo al elemento `<select>` nativo.
2. **Estándares HTML**: Usa el elemento `<select>` nativo en lugar de un simulado con divs.
3. **Estilos CSS**: Los estilos están en `Select.css` y se pueden personalizar con CSS variables.
