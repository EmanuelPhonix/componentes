import React from 'react';
import Input from './Input';
import './Input.css';

/**
 * Input Component Showcase
 * 
 * Displays all 6 states of the Input component as defined in Figma:
 * 1. Default (Initial)
 * 2. Hover
 * 3. Focus
 * 4. Disabled
 * 5. Valid
 * 6. Invalid
 */
export default function InputShowcase() {
  const defaultInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div style={{ padding: '40px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '40px', color: '#333' }}>Input Component Showcase</h1>

      {/* Section 1: Default State */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          1. Default State (Inicial)
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <Input
            placeholder="Ingrese Correo"
            validation="default"
          />
        </div>
      </section>

      {/* Section 2: Hover State - Simulated */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          2. Hover State (Simulated)
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <p style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
            (Hover over the input to see the hover state)
          </p>
          <Input
            placeholder="Ingrese Correo"
            validation="default"
          />
        </div>
      </section>

      {/* Section 3: Focus State */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          3. Focus State
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <p style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
            (Click or focus on the input to see the focus state with blue border and shadow)
          </p>
          <Input
            ref={defaultInputRef}
            placeholder="Ingrese Correo"
            validation="default"
          />
        </div>
      </section>

      {/* Section 4: Disabled State */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          4. Disabled State
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <Input
            placeholder="Ingrese Correo 🔒"
            validation="default"
            disabled={true}
          />
        </div>
      </section>

      {/* Section 5: Valid State */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          5. Valid State (Green)
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <Input
            placeholder="emanuel@gmail.com  ✔️"
            validation="valid"
            defaultValue="emanuel@gmail.com  ✔️"
          />
        </div>
      </section>

      {/* Section 6: Invalid State */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          6. Invalid State (Red)
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <Input
            placeholder="emanuel.com  ✖️"
            validation="invalid"
            defaultValue="emanuel.com  ✖️"
          />
        </div>
      </section>

      {/* Specifications Table */}
      <section style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          Design Specifications
        </h2>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: 'white',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr style={{ background: '#f0f0f0', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>State</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Background</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Border</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Text Color</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>Default</td>
              <td style={{ padding: '12px' }}>rgba(88, 138, 157, 0.5)</td>
              <td style={{ padding: '12px' }}>2px black</td>
              <td style={{ padding: '12px' }}>rgba(26, 26, 26, 0.5)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>Hover</td>
              <td style={{ padding: '12px' }}>rgba(59, 160, 199, 0.5)</td>
              <td style={{ padding: '12px' }}>2px black</td>
              <td style={{ padding: '12px' }}>rgba(0, 0, 0, 0.5)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>Focus</td>
              <td style={{ padding: '12px' }}>Transparent</td>
              <td style={{ padding: '12px' }}>2px #1f5163</td>
              <td style={{ padding: '12px' }}>rgba(26, 26, 26, 0.5)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>Disabled</td>
              <td style={{ padding: '12px' }}>#cccccc</td>
              <td style={{ padding: '12px' }}>2px #353535</td>
              <td style={{ padding: '12px' }}>#7f7f7f</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>Valid</td>
              <td style={{ padding: '12px' }}>#28a745</td>
              <td style={{ padding: '12px' }}>2px #353535</td>
              <td style={{ padding: '12px' }}>#1a1a1a (BLACK)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px' }}>Invalid</td>
              <td style={{ padding: '12px' }}>#dc3545</td>
              <td style={{ padding: '12px' }}>2px #353535</td>
              <td style={{ padding: '12px' }}>#1a1a1a (BLACK)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
