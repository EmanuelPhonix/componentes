# Button Component - React + Vite

Componente Button profesional basado en diseño Figma mediante MCP integration.

## 🚀 Quick Start

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar servidor de desarrollo
```bash
npm run dev
```

El navegador se abrirá automáticamente en `http://localhost:5173`

### 3. Ver el componente

La página mostrará el **Button Showcase** con:
- ✅ 3 Variantes (Primary, Secondary, Tertiary)
- ✅ 3 Tamaños (Small, Medium, Large)
- ✅ 5 Estados (Default, Hover, Focus, Disabled, Loading)
- ✅ Ejemplos prácticos

## 📁 Estructura del Proyecto

```
Nueva carpeta/
├── src/
│   ├── components/Button/          ← Componente principal
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── types.ts
│   │   ├── index.ts
│   │   ├── Button.showcase.tsx     ← Galería visual
│   │   ├── Button.examples.tsx     ← Casos prácticos
│   │   └── *.md                    ← Documentación
│   ├── App.tsx                     ← App principal
│   ├── App.css
│   └── main.tsx                    ← Entry point React
├── index.html                      ← Entry point HTML
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md                       ← Este archivo
```

## 📖 Documentación

Revisa la documentación en `src/components/Button/`:

- **QUICKSTART.md** - Inicio rápido (2 minutos)
- **README.md** - Guía completa de uso
- **ARCHITECTURE.md** - Cómo funciona internamente
- **STRUCTURE.md** - Descripción de archivos
- **Button.examples.tsx** - Casos de uso prácticos

## 🎨 Usar el Componente

```tsx
import Button from "@/components/Button";

// Básico
<Button>Confirmar</Button>

// Con variante y tamaño
<Button variant="primary" size="lg">Aceptar</Button>

// Con estado
<Button isLoading loadingText="Guardando...">Guardar</Button>
```

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Ejecutar servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
```

## 🎯 Características

- ✨ Pixel-perfect según diseño Figma
- 🎨 3 Variantes + 3 Tamaños + 5 Estados
- ♿ WCAG 2.1 AAA Accesible
- 🚀 Zero Dependencies
- 📝 TypeScript + ForwardRef
- 💾 CSS Variables personalizables
- 🌙 Dark Mode support

## 📚 Ejemplos Rápidos

```tsx
// Botón simple
<Button>Click me</Button>

// Diferentes variantes
<Button variant="primary">Principal</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="tertiary">Terciario</Button>

// Diferentes tamaños
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// Estados
<Button disabled>Deshabilitado</Button>
<Button isLoading>Cargando...</Button>

// Control del DOM
const btnRef = useRef<HTMLButtonElement>(null);
<Button ref={btnRef}>Botón</Button>
```

## 🆘 Problemas Comunes

### Error: "Module not found"
```bash
# Asegúrate de instalar dependencias
npm install
```

### No se abra el navegador
Accede manualmente a `http://localhost:5173`

### Cambios no se reflejan
El hot reload está activo. Si persiste, recarga la página.

## 📞 Soporte

Revisa la documentación en `src/components/Button/README.md` para más detalles.

---

**¡Listo para usar! 🎉**

Ejecuta `npm install && npm run dev` y verás tu componente Button en acción.
