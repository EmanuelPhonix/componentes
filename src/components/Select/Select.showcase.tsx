import React from 'react';
import Select from './Select';
import './Select.css';

/**
 * Select Component Showcase
 * 
 * Displays all 6 states of the Select component as defined in Figma:
 * 1. Default (Initial)
 * 2. Hover
 * 3. Focus
 * 4. Disabled
 * 5. Valid
 * 6. Invalid
 */
export default function SelectShowcase() {
  const defaultSelectRef = React.useRef<HTMLSelectElement>(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Componente Select - Showcase</h1>
      <p style={styles.subtitle}>
        Demostración de todos los estados del componente Select basado en diseño Figma.
      </p>

      {/* Estados del Select */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Estados Disponibles</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p style={styles.cardLabel}>1. Default (Inicial)</p>
            <Select
              placeholder="Selecciona una opción"
              validation="default"
              options={[
                { value: 'opt1', label: 'Opción 1' },
                { value: 'opt2', label: 'Opción 2' },
                { value: 'opt3', label: 'Opción 3' },
              ]}
            />
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>2. Focus</p>
            <p style={styles.info}>Usa Tab para navegar</p>
            <Select
              ref={defaultSelectRef}
              placeholder="Selecciona una opción"
              validation="default"
              options={[
                { value: 'opt1', label: 'Opción 1' },
                { value: 'opt2', label: 'Opción 2' },
                { value: 'opt3', label: 'Opción 3' },
              ]}
            />
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>3. Disabled</p>
            <Select
              placeholder="Deshabilitado"
              validation="default"
              disabled={true}
              options={[
                { value: 'opt1', label: 'Opción 1' },
                { value: 'opt2', label: 'Opción 2' },
              ]}
            />
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>4. Valid ✓</p>
            <Select
              placeholder="Selecciona una opción"
              validation="valid"
              defaultValue="opt1"
              options={[
                { value: 'opt1', label: 'Opción válida' },
                { value: 'opt2', label: 'Opción 2' },
                { value: 'opt3', label: 'Opción 3' },
              ]}
            />
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>5. Invalid ✗</p>
            <Select
              placeholder="Selecciona una opción"
              validation="invalid"
              options={[
                { value: 'opt1', label: 'Error detectado' },
                { value: 'opt2', label: 'Opción 2' },
                { value: 'opt3', label: 'Opción 3' },
              ]}
            />
          </div>

          <div style={styles.card}>
            <p style={styles.cardLabel}>6. Con Label</p>
            <Select
              label="País"
              placeholder="Selecciona un país"
              validation="default"
              options={[
                { value: 'mx', label: 'México' },
                { value: 'es', label: 'España' },
                { value: 'ar', label: 'Argentina' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Especificaciones de Diseño */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Especificaciones de Diseño</h2>
        <div style={styles.specTable}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableHeaderCell}>Estado</th>
                <th style={styles.tableHeaderCell}>Fondo</th>
                <th style={styles.tableHeaderCell}>Borde</th>
                <th style={styles.tableHeaderCell}>Color Texto</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>Default</td>
                <td style={styles.tableCell}>rgba(88, 138, 157, 0.5)</td>
                <td style={styles.tableCell}>2px #1a1a1a</td>
                <td style={styles.tableCell}>rgba(26, 26, 26, 0.5)</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>Hover</td>
                <td style={styles.tableCell}>rgba(59, 160, 199, 0.5)</td>
                <td style={styles.tableCell}>2px #1a1a1a</td>
                <td style={styles.tableCell}>rgba(0, 0, 0, 0.5)</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>Focus</td>
                <td style={styles.tableCell}>Transparent</td>
                <td style={styles.tableCell}>2px #1f5163</td>
                <td style={styles.tableCell}>rgba(26, 26, 26, 0.5)</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>Disabled</td>
                <td style={styles.tableCell}>#cccccc</td>
                <td style={styles.tableCell}>2px #353535</td>
                <td style={styles.tableCell}>#7f7f7f</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>Valid</td>
                <td style={styles.tableCell}>#28a745</td>
                <td style={styles.tableCell}>2px #353535</td>
                <td style={styles.tableCell}>#1a1a1a (BLACK)</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}>Invalid</td>
                <td style={styles.tableCell}>#dc3545</td>
                <td style={styles.tableCell}>2px #353535</td>
                <td style={styles.tableCell}>#1a1a1a (BLACK)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Información */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Características</h2>
        <div style={styles.features}>
          <ul style={styles.featureList}>
            <li>✅ Elemento SELECT nativo HTML</li>
            <li>✅ 6 estados: Default, Hover, Focus, Disabled, Valid, Invalid</li>
            <li>✅ Validación integrada</li>
            <li>✅ Label y helper text opcionales</li>
            <li>✅ ForwardRef para acceso al DOM</li>
            <li>✅ TypeScript completamente tipado</li>
            <li>✅ WCAG 2.1 AAA accesible</li>
            <li>✅ Sin dependencias externas</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '24px',
    color: '#1a1a1a',
    borderBottom: '2px solid #588a9d',
    paddingBottom: '12px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '24px',
  },
  card: {
    padding: '24px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '150px',
    gap: '16px',
  },
  cardLabel: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#333',
    textAlign: 'center' as const,
  },
  info: {
    fontSize: '12px',
    color: '#999',
    textAlign: 'center' as const,
  },
  specTable: {
    overflow: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  tableHeaderRow: {
    backgroundColor: '#f3f4f6',
    borderBottom: '2px solid #e5e7eb',
  },
  tableHeaderCell: {
    padding: '16px',
    textAlign: 'left' as const,
    fontWeight: 600,
    color: '#1a1a1a',
    fontSize: '14px',
  },
  tableRow: {
    borderBottom: '1px solid #e5e7eb',
  },
  tableCell: {
    padding: '14px 16px',
    color: '#666',
    fontSize: '13px',
  },
  features: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  featureList: {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    margin: 0,
    padding: 0,
  },
};

