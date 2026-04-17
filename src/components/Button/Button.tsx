/**
 * Componente Button
 * Botón reutilizable profesional basado en diseño Figma
 * Soporta múltiples variantes, tamaños, estados y es pixel-perfect
 */

import { forwardRef, ReactNode } from "react";
import { ButtonProps, ButtonVariant, ButtonSize } from "./types";
import "./Button.css";

/**
 * Componente Button - Botón reutilizable y accesible
 *
 * Características:
 * - ForwardRef para acceso al nodo DOM
 * - Múltiples variantes: primary, secondary, tertiary
 * - Múltiples tamaños: sm, md, lg
 * - Estados: default, hover, focus, disabled, loading
 * - Soporte para iconos al inicio y final
 * - Pixel-perfect según diseño Figma
 * - Completamente accesible (WCAG 2.1)
 *
 * @example
 * // Uso básico
 * <Button onClick={handleClick}>Confirmar</Button>
 *
 * @example
 * // Con variante y tamaño
 * <Button variant="secondary" size="lg">Cancelar</Button>
 *
 * @example
 * // Con estado de carga
 * <Button isLoading loadingText="Guardando...">Guardar</Button>
 *
 * @example
 * // Con iconos
 * <Button startIcon={<CheckIcon />}>Aceptar</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      loadingText = "Cargando...",
      startIcon,
      endIcon,
      fullWidth = false,
      ariaLabel,
      disabled = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    // Validación: el botón no puede estar habilitado y en estado loading simultáneamente
    const isDisabled = disabled || isLoading;

    // Construcción dinámia de clases
    const buttonClasses = [
      "button",
      `button--${variant}`,
      `button--${size}`,
      fullWidth && "button--full-width",
      isLoading && "button--loading",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Contenido del botón: muestra text loading si está en estado de carga
    const buttonContent: ReactNode =
      isLoading && loadingText ? (
        <>
          <span className="button__spinner" aria-hidden="true" />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {startIcon && (
            <span className="button__icon button__icon--start" aria-hidden="true">
              {startIcon}
            </span>
          )}
          {children}
          {endIcon && (
            <span className="button__icon button__icon--end" aria-hidden="true">
              {endIcon}
            </span>
          )}
        </>
      );

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={buttonClasses}
        aria-label={ariaLabel}
        aria-busy={isLoading}
        {...rest}
      >
        {buttonContent}
      </button>
    );
  }
);

// Nombre para debugging
Button.displayName = "Button";

export default Button;
export type { ButtonProps, ButtonVariant, ButtonSize };
