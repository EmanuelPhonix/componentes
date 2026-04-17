/**
 * Tipos para el componente Button
 * Definición de variantes, tamaños y estados del botón
 */

/**
 * Variantes del botón - define el estilo visual principal
 */
export type ButtonVariant = "primary" | "secondary" | "tertiary";

/**
 * Tamaños disponibles del botón
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Estados visuales del botón
 */
export type ButtonState = "default" | "hover" | "focus" | "disabled" | "loading";

/**
 * Propiedades del componente Button
 * Extiende las propiedades nativas de HTML Button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variante de estilo del botón
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Tamaño del botón
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Estado de carga - muestra spinner y deshabilita el botón
   * @default false
   */
  isLoading?: boolean;

  /**
   * Texto a mostrar mientras está en estado de carga
   * @default "Cargando..."
   */
  loadingText?: string;

  /**
   * Icono a mostrar antes del texto
   */
  startIcon?: React.ReactNode;

  /**
   * Icono a mostrar después del texto
   */
  endIcon?: React.ReactNode;

  /**
   * Hace el botón de ancho completo (100%)
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Texto de ayuda o descripción accesible
   */
  ariaLabel?: string;
}
