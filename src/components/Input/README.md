# Input Component

A fully-featured, accessible text input component built with React and TypeScript. The component supports multiple validation states and is designed to match exact Figma specifications.

## Overview

The Input component provides a professional-grade text input field with support for:
- **6 Validation States**: Default, Hover, Focus, Disabled, Valid, Invalid
- **Validation States**: Clearly communicate input validity with color-coded backgrounds
- **Helper Text**: Display additional context or validation messages
- **Labels**: Optional label text for accessibility
- **Full Accessibility**: Proper ARIA attributes and semantic HTML
- **Responsive Design**: Works across all screen sizes

## Features

- ✅ **Pixel-perfect Figma implementation**: Exact colors, borders, padding, and typography
- ✅ **ForwardRef support**: Direct access to underlying input element
- ✅ **TypeScript**: Fully typed component and props
- ✅ **Validation states**: Default, Valid (green), Invalid (red), Disabled
- ✅ **Interactive states**: Hover and focus effects
- ✅ **No external dependencies**: Pure React + CSS
- ✅ **Customizable**: BEM CSS architecture allows easy customization
- ✅ **Helper text**: Display validation messages or hints

## Installation

The Input component is part of the Componentes project. Simply import it:

```typescript
import Input from '@/components/Input';
```

## Usage

### Basic Usage

```tsx
import Input from '@/components/Input';

export default function MyForm() {
  const [email, setEmail] = useState('');

  return (
    <Input
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}
```

### With Validation

```tsx
<Input
  placeholder="Enter email"
  value={email}
  onChange={handleChange}
  validation={isValidEmail(email) ? 'valid' : 'invalid'}
  helperText={isValidEmail(email) ? '✓ Valid email' : '✗ Invalid email format'}
/>
```

### With Label and Helper Text

```tsx
<Input
  label="Email Address"
  placeholder="Ingrese Correo"
  helperText="We'll never share your email"
  validation="default"
/>
```

### Disabled State

```tsx
<Input
  placeholder="This field is disabled"
  disabled={true}
  helperText="This field cannot be edited"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `validation` | `'default' \| 'valid' \| 'invalid'` | `'default'` | Validation state of the input |
| `label` | `string` | — | Optional label text displayed above input |
| `helperText` | `string` | — | Optional helper text displayed below input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `placeholder` | `string` | — | Placeholder text |
| `className` | `string` | — | Additional CSS class names |
| `...rest` | `HTMLInputElement` attributes | — | All standard HTML input attributes |

## Validation States

### Default State
- **Background**: `rgba(88, 138, 157, 0.5)` (light blue)
- **Border**: 4px black
- **Text Color**: `rgba(26, 26, 26, 0.5)` (semi-transparent black)

### Hover State
- **Background**: `rgba(59, 160, 199, 0.5)` (brighter blue)
- **Border**: 4px black
- **Text Color**: `rgba(0, 0, 0, 0.5)` (semi-transparent black)

### Focus State
- **Background**: Transparent
- **Border**: 4px `#1f5163` (dark blue)
- **Box Shadow**: `0px 4px 4px 0px #1f5163`
- **Text Color**: `rgba(26, 26, 26, 0.5)` (semi-transparent black)

### Valid State (Green)
- **Background**: `#28a745` (green)
- **Border**: 4px `#353535` (dark gray)
- **Text Color**: `#1a1a1a` (black)

### Invalid State (Red)
- **Background**: `#dc3545` (red)
- **Border**: 4px `#353535` (dark gray)
- **Text Color**: `#1a1a1a` (black)

### Disabled State
- **Background**: `#cccccc` (light gray)
- **Border**: 4px `#353535` (dark gray)
- **Text Color**: `#7f7f7f` (medium gray)

## Dimensions

All sizes share the same dimensions:
- **Height**: 65px
- **Padding**: 10px
- **Border Radius**: 8px
- **Font**: Inter Bold 40px
- **Border Width**: 4px

## CSS Architecture

The component uses CSS custom properties and BEM naming convention:

```css
/* Custom Properties */
--input-initial-bg: rgba(88, 138, 157, 0.5);
--input-valid-bg: #28a745;
--input-invalid-bg: #dc3545;
/* ...and more */

/* BEM Classes */
.input-wrapper          /* Container */
.input                  /* Main container */
.input__field           /* Input field */
.input--default         /* Default state */
.input--valid           /* Valid state */
.input--invalid         /* Invalid state */
.input--disabled        /* Disabled state */
.input-helper           /* Helper text */
```

## Examples

See `Input.examples.tsx` for:
1. Simple email input with validation
2. Disabled input field
3. Contact form with real-time validation
4. Search input
5. Password input with character count
6. All validation states comparison

See `Input.showcase.tsx` for all 6 states displayed side-by-side with a specifications table.

## Accessibility

The Input component follows accessibility best practices:
- Proper label associations
- Semantic HTML structure
- ARIA attributes support
- Keyboard navigation support
- Focus indicators

## Browser Support

Works on all modern browsers that support:
- CSS custom properties
- CSS Grid
- ES2020 JavaScript
- React 18+

## Related Components

- [Button Component](../Button/README.md) - Primary action button with similar styling approach

## TypeScript

Full TypeScript support with exported types:

```typescript
import { InputProps } from '@/components/Input';
```

## Performance

- No external dependencies
- Minimal re-renders with proper React optimization
- CSS transitions for smooth interactions
- Optimized for mobile and desktop

## License

Part of the Componentes project.
