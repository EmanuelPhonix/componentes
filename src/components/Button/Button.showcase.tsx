/**
 * Ejemplo de uso del componente Button
 * Demuestra todas las variantes, tamaños y estados
 */

import React, { useState } from "react";
import Button from "./Button";
import "./Button.css";

export default function ButtonShowcase() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = async () => {
    setIsLoading(true);
    // Simula una operación async (ej: API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Componente Button - Showcase</h1>
      <p style={styles.subtitle}>
        Demostración de todas las variantes, tamaños y estados del componente
        Button basado en diseño Figma.
      </p>

      {/* ============ VARIANTE PRIMARY ============ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Variante: Primary</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Default</p>
            <Button variant="primary" size="md">
              Confirmar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Hover</p>
            <p style={styles.info}>Pasa el mouse sobre el botón</p>
            <Button variant="primary" size="md">
              Confirmar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Focus</p>
            <p style={styles.info}>Usa Tab para navegar</p>
            <Button variant="primary" size="md">
              Confirmar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Disabled</p>
            <Button variant="primary" size="md" disabled>
              No Disponible
            </Button>
          </div>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subTitle}>Tamaños - Primary</h3>
          <div style={styles.sizeGrid}>
            <div style={styles.card}>
              <p style={styles.cardLabel}>Small</p>
              <Button variant="primary" size="sm">
                Pequeño
              </Button>
            </div>

            <div style={styles.card}>
              <p style={styles.cardLabel}>Medium (Default)</p>
              <Button variant="primary" size="md">
                Mediano
              </Button>
            </div>

            <div style={styles.card}>
              <p style={styles.cardLabel}>Large</p>
              <Button variant="primary" size="lg">
                Grande
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VARIANTE SECONDARY ============ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Variante: Secondary</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Default</p>
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Hover</p>
            <p style={styles.info}>Pasa el mouse sobre el botón</p>
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Focus</p>
            <p style={styles.info}>Usa Tab para navegar</p>
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Disabled</p>
            <Button variant="secondary" size="md" disabled>
              Deshabilitado
            </Button>
          </div>
        </div>
      </section>

      {/* ============ VARIANTE TERTIARY ============ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Variante: Tertiary</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Default</p>
            <Button variant="tertiary" size="md">
              Más información
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Hover</p>
            <p style={styles.info}>Pasa el mouse sobre el botón</p>
            <Button variant="tertiary" size="md">
              Más información
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Focus</p>
            <p style={styles.info}>Usa Tab para navegar</p>
            <Button variant="tertiary" size="md">
              Más información
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Disabled</p>
            <Button variant="tertiary" size="md" disabled>
              Deshabilitado
            </Button>
          </div>
        </div>
      </section>

      {/* ============ ESTADO LOADING ============ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Estado: Loading</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.cardLabel}>Primary Loading</p>
            <Button
              variant="primary"
              size="md"
              isLoading={isLoading}
              onClick={handleLoadingDemo}
            >
              Procesar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Secondary Loading</p>
            <Button
              variant="secondary"
              size="md"
              isLoading={isLoading}
              onClick={handleLoadingDemo}
              loadingText="Procesando..."
            >
              Procesar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>With Custom Loading Text</p>
            <Button
              variant="primary"
              size="md"
              isLoading={isLoading}
              onClick={handleLoadingDemo}
              loadingText="Guardando..."
            >
              Guardar
            </Button>
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>Info</p>
            <p style={styles.info}>Haz click para ver el estado de carga</p>
          </div>
        </div>
      </section>

      {/* ============ ANCHO COMPLETO ============ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Full Width</h2>
        <div style={styles.fullWidthSection}>
          <Button variant="primary" size="md" fullWidth>
            Botón a ancho completo
          </Button>
        </div>
      </section>

      {/* ============ GRUPO DE BOTONES ============ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Grupo de Botones - Ejemplo Práctico</h2>
        <div style={styles.buttonGroup}>
          <Button variant="primary" size="md">
            Guardar
          </Button>
          <Button variant="secondary" size="md">
            Cancelar
          </Button>
          <Button variant="tertiary" size="md">
            Descartar
          </Button>
        </div>
      </section>

      {/* ============ INFORMACIÓN ============ */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Información</h2>
        <div style={styles.infoBox}>
          <h3>Características del Componente:</h3>
          <ul style={styles.list}>
            <li>✅ Pixel-perfect según diseño Figma</li>
            <li>✅ 3 Variantes: Primary, Secondary, Tertiary</li>
            <li>✅ 3 Tamaños: Small, Medium, Large</li>
            <li>✅ Estados: Default, Hover, Focus, Disabled, Loading</li>
            <li>✅ ForwardRef para acceso al DOM</li>
            <li>✅ TypeScript completamente tipado</li>
            <li>✅ WCAG 2.1 AAA accesible</li>
            <li>✅ Soporte para navegación por teclado</li>
            <li>✅ Variables CSS para personalización</li>
            <li>✅ Zero dependencies</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "8px",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "40px",
  },
  section: {
    marginBottom: "60px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "24px",
    color: "#1a1a1a",
    borderBottom: "2px solid #588a9d",
    paddingBottom: "12px",
  },
  subSection: {
    marginTop: "40px",
  },
  subTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "16px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    marginBottom: "24px",
  },
  sizeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "24px",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "150px",
  },
  cardLabel: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#7f7f7f",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  info: {
    fontSize: "12px",
    color: "#999",
    marginBottom: "12px",
    textAlign: "center" as const,
  },
  fullWidthSection: {
    padding: "24px",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
  },
  buttonGroup: {
    padding: "24px",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  infoBox: {
    padding: "24px",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "2px solid #588a9d",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "12px 0 0 0",
  },
};
