/**
 * ARQUITECTURA DEL COMPONENTE BUTTON
 * ====================================
 * 
 * Este documento explica la arquitectura, patrones de diseño
 * y cómo mantener el componente escalable y reutilizable.
 */

/**
 * ## 1. ESTRUCTURA DE ARCHIVOS
 * 
 * Button/
 * ├── Button.tsx          → Componente principal (lógica React + JSX)
 * ├── Button.css          → Estilos (BEM + CSS Variables)
 * ├── types.ts            → Tipos TypeScript (interfaces, enums)
 * ├── index.ts            → Punto de entrada (exports públicas)
 * ├── Button.showcase.tsx → Demostración interactiva
 * └── README.md           → Documentación para usuarios
 * 
 * PRINCIPIOS:
 * - Separación de responsabilidades (lógica, estilos, tipos)
 * - Un archivo = una preocupación
 * - Fácil de mantener y extender
 */

/**
 * ## 2. FLUJO DE PROPS Y VARIANTES
 * 
 * Props recibidas
 *      ↓
 * [Validación de estado (disabled/loading)]
 *      ↓
 * [Construcción dinámica de clases BEM]
 *      ↓
 * [Selección de contenido (normal vs loading)]
 *      ↓
 * [Render del componente]
 *      ↓
 * Output: HTML con clases BEM aplicadas
 * 
 * EJEMPLO:
 * Input:  <Button variant="primary" size="lg" isLoading={true}>Guardar</Button>
 * Clases: button button--primary button--lg button--loading
 * CSS aplica: .button--primary { ... } + .button--lg { ... } + .button--loading { ... }
 */

/**
 * ## 3. SISTEMA BEM (Block, Element, Modifier)
 * 
 * Nomenclatura:
 * 
 * .button                      ← BLOCK (elemento principal)
 * ├── .button__icon            ← ELEMENT (parte del block)
 * ├── .button__icon--start     ← MODIFIER (variación del element)
 * ├── .button--primary         ← MODIFIER (variante del block)
 * ├── .button--lg              ← MODIFIER (tamaño)
 * └── .button--loading         ← MODIFIER (estado)
 * 
 * VENTAJAS:
 * ✅ Escalable: Agregar nuevas clases es predecible
 * ✅ Mantenible: Estructura clara y semántica
 * ✅ No conflictivo: Nombres únicos y evita colisiones CSS
 * ✅ Componible: Las clases se combinan sin efectos secundarios
 */

/**
 * ## 4. MANEJO DE VARIANTES
 * 
 * PASO 1: Definir tipo en types.ts
 * ─────────────────────────────────────
 * export type ButtonVariant = "primary" | "secondary" | "tertiary" | "nuevaVariante";
 * 
 * PASO 2: Agregar estilos en Button.css
 * ──────────────────────────────────────
 * .button--nuevaVariante {
 *   background-color: var(--button-new-base);
 *   border-color: var(--button-new-border);
 *   color: var(--button-new-text);
 * }
 * 
 * .button--nuevaVariante:hover:not(:disabled) {
 *   background-color: var(--button-new-light);
 * }
 * 
 * PASO 3: Usar en React (automático)
 * ──────────────────────────────────
 * <Button variant="nuevaVariante">Texto</Button>
 * 
 * ¡El componente React NO necesita cambios! 
 * La clase CSS se aplica automáticamente via:
 * const buttonClasses = [`button--${variant}`, ...].join(" ")
 */

/**
 * ## 5. MANEJO DE TAMAÑOS
 * 
 * Similar a variantes, pero enfocado en dimensiones:
 * 
 * PASO 1: Definir tipo en types.ts
 * export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
 * 
 * PASO 2: Agregar estilos en Button.css
 * .button--xs {
 *   padding: var(--button-padding-xs);
 *   font-size: var(--button-font-size-xs);
 *   height: 24px;
 * }
 * 
 * PASO 3: Definir variables CSS
 * --button-padding-xs: 4px 8px;
 * --button-font-size-xs: 12px;
 * 
 * VENTAJA: Todos los tamaños automáticamente disponibles
 */

/**
 * ## 6. ESTADOS Y SU PRECEDENCIA EN CSS
 * 
 * La especificidad CSS se ordena asi:
 * 
 * 1. Estado Base: .button--primary { ... }
 * 2. Hover:      .button--primary:hover:not(:disabled) { ... }
 * 3. Focus:      .button--primary:focus:not(:disabled) { ... }
 * 4. Disabled:   .button--primary:disabled { ... }
 * 5. Loading:    .button--primary.button--loading { ... }
 * 
 * EL ORDEN IMPORTA:
 * ✅ :not(:disabled) previene que hover se aplique en disabled
 * ✅ .button--loading añade clase JS cuando isLoading=true
 * ✅ Cada estado tiene su propio bloque CSS bien definido
 */

/**
 * ## 7. ACCESIBILIDAD (a11y)
 * 
 * IMPLEMENTADO:
 * 
 * 1. Atributos ARIA:
 *    - aria-label: Descripción del botón
 *    - aria-busy: Indica estado de carga (screen readers)
 * 
 * 2. Navegación por teclado:
 *    - Focus visible con outline
 *    - :focus-visible para acceder via Tab
 * 
 * 3. Reduced motion:
 *    - Respeta @media (prefers-reduced-motion: reduce)
 *    - Desactiva animaciones de spinner
 * 
 * 4. Semántica HTML:
 *    - <button> nativo (mejor que <div> o <a>)
 *    - type="button" por defecto (no sumits)
 *    - disabled attribute nativo
 * 
 * 5. Contraste de color:
 *    - WCAG AAA (7:1 en todos los estados)
 *    - Texto blanco sobre fondo oscuro
 */

/**
 * ## 8. FORWARDREF - ACCESO AL DOM
 * 
 * ¿POR QUÉ?
 * Permite a componentes padres acceder al <button> nativo:
 * 
 * CÓDIGO:
 * const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
 *   return <button ref={ref} {...props} />;
 * });
 * 
 * USO:
 * const btnRef = useRef<HTMLButtonElement>(null);
 * 
 * <Button ref={btnRef}>Botón</Button>
 * 
 * // Acceso al DOM nativo:
 * btnRef.current?.focus();
 * btnRef.current?.click();
 * btnRef.current?.disabled = true;
 */

/**
 * ## 9. EXTENSIÓN DE HTMLButtonAttributes
 * 
 * El componente extiende React.ButtonHTMLAttributes<HTMLButtonElement>
 * 
 * ¿QUÉ SIGNIFICA?
 * - Hereda todas las props del <button> nativo
 * - onClick, onFocus, onBlur, type, form, etc.
 * - TypeScript autocomplete para props nativas
 * 
 * EJEMPLO:
 * <Button
 *   onClick={(e) => console.log(e)}      // Nativa
 *   onFocus={() => console.log("focus")} // Nativa
 *   type="submit"                        // Nativa
 *   variant="primary"                    // Custom
 *   size="lg"                            // Custom
 * >
 *   Enviar
 * </Button>
 */

/**
 * ## 10. LOADING STATE - IMPLEMENTACIÓN
 * 
 * Cuando isLoading=true:
 * 
 * 1. Se agrega clase: .button--loading
 * 2. Se muestra spinner: <span className="button__spinner" />
 * 3. Se reemplaza children con loadingText
 * 4. Se deshabilita: disabled=true (automático)
 * 5. Se establece: aria-busy="true" (accesibilidad)
 * 
 * CSS ANIMATION:
 * @keyframes button-spinner-spin {
 *   from { transform: rotate(0deg); }
 *   to { transform: rotate(360deg); }
 * }
 * 
 * RESPETA MOTION REDUCTION:
 * @media (prefers-reduced-motion: reduce) {
 *   .button__spinner {
 *     animation: none; // Desactiva rotación
 *   }
 * }
 */

/**
 * ## 11. ICONOS - PATRÓN DE IMPLEMENTACIÓN
 * 
 * Props:
 * - startIcon?: ReactNode  // Icono izquierda
 * - endIcon?: ReactNode    // Icono derecha
 * 
 * ESTRUCTURA HTML:
 * <button className="button">
 *   <span className="button__icon button__icon--start">{startIcon}</span>
 *   <span>Texto del botón</span>
 *   <span className="button__icon button__icon--end">{endIcon}</span>
 * </button>
 * 
 * CSS:
 * .button__icon {
 *   display: inline-flex;        // Alinea mejor
 *   align-items: center;
 *   justify-content: center;
 *   flex-shrink: 0;              // No reduce tamaño en flex
 * }
 * 
 * VENTAJA: Icono flexible (SVG, imagen, emoji, etc.)
 * <Button startIcon={<CheckIcon />} />
 * <Button startIcon={<img src="..." />} />
 * <Button startIcon="✓" />
 */

/**
 * ## 12. PERSONALIZACIÓN VÍA CSS VARIABLES
 * 
 * Sin tocar el componente React, personaliza todo vía CSS:
 * 
 * En tu app global CSS:
 * :root {
 *   --button-primary-base: #ff0000;      // Cambiar color primario
 *   --button-font-family: 'Georgia';     // Cambiar tipografía
 *   --button-padding-lg: 20px 40px;      // Cambiar espaciado
 *   --button-border-radius: 20px;        // Cambiar bordes
 * }
 * 
 * VENTAJAS:
 * ✅ No requires cambios en código React
 * ✅ Fácil tema oscuro
 * ✅ Reutilizable en componentes
 * ✅ Dinámico en runtime
 */

/**
 * ## 13. TESTING
 * 
 * Puntos clave a testear:
 * 
 * RENDERING:
 * - ✓ Renderiza con texto correcto
 * - ✓ Aplica clases BEM correctas
 * - ✓ Renderiza iconos si se proporcionan
 * 
 * INTERACCIÓN:
 * - ✓ onClick se ejecuta
 * - ✓ Disabled previene clicks
 * - ✓ Loading muestra spinner
 * 
 * ACCESIBILIDAD:
 * - ✓ aria-label presente
 * - ✓ aria-busy activo durante loading
 * - ✓ Navegable por teclado
 * 
 * FORWARDREF:
 * - ✓ Ref accede al nodo <button>
 * - ✓ focus() funciona via ref
 */

/**
 * ## 14. MANTENIMIENTO Y ESCALABILIDAD
 * 
 * PARA AGREGAR NUEVA VARIANTE:
 * 1. Editar types.ts (add tipo)
 * 2. Editar Button.css (add estilos)
 * 3. ¡Listo! El componente ya funciona
 * 
 * PARA AGREGAR NUEVO TAMAÑO:
 * 1. Editar types.ts (add tipo)
 * 2. Editar Button.css (add estilos)
 * 3. ¡Listo!
 * 
 * PARA AGREGAR NUEVO ESTADO:
 * 1. Editar types.ts (si necesario)
 * 2. Agregar prop en ButtonProps
 * 3. Editar lógica en Button.tsx (si es necesario)
 * 4. Editar Button.css (estilos)
 * 
 * PRINCIPIO DRY (Don't Repeat Yourself):
 * - Las clases BEM se generan dinámicamente
 * - Las variables CSS se reutilizan
 * - El código es modular y no tiene duplication
 */

/**
 * ## 15. PATTERN MATCHING - CÓMO FUNCIONA
 * 
 * const buttonClasses = [
 *   "button",                       // Siempre presente
 *   `button--${variant}`,           // Selecciona .button--primary, etc.
 *   `button--${size}`,              // Selecciona .button--lg, etc.
 *   fullWidth && "button--full-width",  // Condicional
 *   isLoading && "button--loading", // Condicional
 *   className,                      // Clases adicionales del usuario
 * ]
 *   .filter(Boolean)                // Elimina undefined/false
 *   .join(" ");                     // "button button--primary button--lg ..."
 * 
 * RESULTADO:
 * <button className="button button--primary button--lg button--full-width">
 */

export {};
