# Select Component - Quick Start

Comienza a usar el componente Select en 2 minutos.

## 1. Importar el componente

```tsx
import Select from '@/components/Select';
```

## 2. Uso más simple

```tsx
<Select
  placeholder="Elige una opción"
  options={[
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
  ]}
/>
```

## 3. Con etiqueta

```tsx
<Select
  label="Mi Campo"
  placeholder="Selecciona..."
  options={[
    { value: 'a', label: 'Alternativa A' },
    { value: 'b', label: 'Alternativa B' },
  ]}
/>
```

## 4. Con validación

```tsx
<Select
  label="Email"
  placeholder="Selecciona tu email"
  validation="valid"
  helperText="✓ Email válido"
  options={options}
/>
```

## 5. Controlado (con estado)

```tsx
const [value, setValue] = useState('');

<Select
  value={value}
  onChange={(e) => setValue(e.target.value)}
  options={options}
/>
```

## 6. Con deshabilitado

```tsx
<Select
  disabled={true}
  placeholder="No disponible"
  options={options}
/>
```

## Estados de Validación

- `'default'` - Estado inicial
- `'valid'` - Campo válido (verde)
- `'invalid'` - Campo inválido (rojo)

## Propiedades Esenciales

| Prop | Tipo | Ejemplo |
|------|------|---------|
| `options` | `SelectOption[]` | `[{value: 'a', label: 'A'}]` |
| `placeholder` | `string` | `"Elige uno..."` |
| `label` | `string` | `"Categoría"` |
| `validation` | `string` | `"valid"` |
| `helperText` | `string` | `"Campo requerido"` |
| `disabled` | `boolean` | `false` |

## Tipos

```tsx
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  validation?: 'default' | 'valid' | 'invalid';
  label?: string;
  helperText?: string;
  disabled?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  // ... + todas las propiedades de HTMLSelectElement
}
```

## Ejemplos Completos

### Formulario Simple

```tsx
import { useState } from 'react';
import Select from '@/components/Select';

export default function Form() {
  const [country, setCountry] = useState('');

  return (
    <Select
      label="País"
      placeholder="Selecciona tu país"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      options={[
        { value: 'mx', label: 'México' },
        { value: 'es', label: 'España' },
        { value: 'ar', label: 'Argentina' },
      ]}
    />
  );
}
```

### Con Validación

```tsx
import { useState } from 'react';
import Select from '@/components/Select';

export default function FormWithValidation() {
  const [value, setValue] = useState('');
  const [validation, setValidation] = useState('default');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setValue(val);
    setValidation(val ? 'valid' : 'invalid');
  };

  return (
    <Select
      label="Categoría"
      placeholder="Elige una categoría"
      value={value}
      onChange={handleChange}
      validation={validation}
      helperText={
        validation === 'valid' ? '✓ Válido' : '✗ Selecciona algo'
      }
      options={[
        { value: 'tech', label: 'Tecnología' },
        { value: 'design', label: 'Diseño' },
        { value: 'business', label: 'Negocios' },
      ]}
    />
  );
}
```

## Notas

- El componente envuelve el elemento `<select>` nativo, así que hereda todas sus propiedades y métodos.
- Usa `forwardRef` para acceso al DOM: `const selectRef = useRef(); <Select ref={selectRef} />`
- Los estilos se pueden personalizar modificando `Select.css`
