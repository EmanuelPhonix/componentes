import React from 'react';
import Select from './Select';
import './Select.css';

type ValidationState = 'default' | 'valid' | 'invalid';

/**
 * Example 1: Country Selection with Validation
 */
export function CountrySelectExample() {
  const [country, setCountry] = React.useState('');
  const [validationState, setValidationState] = React.useState<ValidationState>('default');

  const countries = [
    { value: 'mx', label: 'México' },
    { value: 'es', label: 'España' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'cl', label: 'Chile' },
  ];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCountry(value);
    setValidationState(value ? 'valid' : 'invalid');
  };

  return (
    <div style={styles.exampleContainer}>
      <h2 style={styles.exampleTitle}>Selección de País</h2>
      <Select
        label="País"
        placeholder="Selecciona tu país"
        value={country}
        onChange={handleCountryChange}
        validation={validationState}
        options={countries}
        helperText={
          validationState === 'valid' ? '✓ País seleccionado' :
          'Selecciona un país'
        }
      />
    </div>
  );
}

/**
 * Example 2: Disabled Select
 */
export function DisabledSelectExample() {
  return (
    <div style={styles.exampleContainer}>
      <h2 style={styles.exampleTitle}>Select Deshabilitado</h2>
      <Select
        label="Campo Bloqueado"
        placeholder="Este campo está deshabilitado"
        disabled={true}
        options={[
          { value: 'opt1', label: 'Opción 1' },
          { value: 'opt2', label: 'Opción 2' },
        ]}
        helperText="Este campo no puede ser editado"
      />
    </div>
  );
}

/**
 * Example 3: Profile Form with Multiple Selects
 */
export function ProfileFormExample() {
  const [formData, setFormData] = React.useState({
    country: '',
    role: '',
    experience: '',
  });

  const [validationStates, setValidationStates] = React.useState<{
    country: ValidationState;
    role: ValidationState;
    experience: ValidationState;
  }>({
    country: 'default',
    role: 'default',
    experience: 'default',
  });

  const handleFormChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setValidationStates(prev => ({
      ...prev,
      [field]: value ? 'valid' : 'default',
    }));
  };

  const isFormComplete = formData.country && formData.role && formData.experience;

  return (
    <div style={styles.exampleContainer}>
      <h2 style={styles.exampleTitle}>Formulario de Perfil</h2>
      <form style={styles.form}>
        <Select
          label="País"
          placeholder="Selecciona tu país"
          value={formData.country}
          onChange={(e) => handleFormChange('country', e.target.value)}
          validation={validationStates.country}
          options={[
            { value: 'mx', label: 'México' },
            { value: 'es', label: 'España' },
            { value: 'ar', label: 'Argentina' },
            { value: 'co', label: 'Colombia' },
          ]}
          helperText={validationStates.country === 'valid' ? '✓ Seleccionado' : 'Requerido'}
        />

        <Select
          label="Rol"
          placeholder="Selecciona tu rol"
          value={formData.role}
          onChange={(e) => handleFormChange('role', e.target.value)}
          validation={validationStates.role}
          options={[
            { value: 'dev', label: 'Desarrollador' },
            { value: 'designer', label: 'Diseñador' },
            { value: 'pm', label: 'Product Manager' },
            { value: 'other', label: 'Otro' },
          ]}
          helperText={validationStates.role === 'valid' ? '✓ Seleccionado' : 'Requerido'}
        />

        <Select
          label="Nivel de Experiencia"
          placeholder="Selecciona tu experiencia"
          value={formData.experience}
          onChange={(e) => handleFormChange('experience', e.target.value)}
          validation={validationStates.experience}
          options={[
            { value: 'junior', label: 'Junior (0-2 años)' },
            { value: 'mid', label: 'Mid-Level (2-5 años)' },
            { value: 'senior', label: 'Senior (5+ años)' },
          ]}
          helperText={validationStates.experience === 'valid' ? '✓ Seleccionado' : 'Requerido'}
        />

        <div style={styles.formStatus}>
          {isFormComplete ? (
            <>
              <p style={styles.formStatusSuccess}>✓ ¡Formulario completado!</p>
            </>
          ) : (
            <p style={styles.formStatusWarning}>⚠ Por favor completa todos los campos</p>
          )}
        </div>
      </form>
    </div>
  );
}

/**
 * Example 4: Dependent Selects (Country → State)
 */
export function DependentSelectsExample() {
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');

  const states: Record<string, Array<{ value: string; label: string }>> = {
    mx: [
      { value: 'mx-cdmx', label: 'CDMX' },
      { value: 'mx-jalisco', label: 'Jalisco' },
      { value: 'mx-monterrey', label: 'Nuevo León' },
    ],
    es: [
      { value: 'es-madrid', label: 'Madrid' },
      { value: 'es-barcelona', label: 'Cataluña' },
      { value: 'es-sevilla', label: 'Andalucía' },
    ],
  };

  return (
    <div style={styles.exampleContainer}>
      <h2 style={styles.exampleTitle}>Selects Dependientes (País → Región)</h2>
      <form style={styles.form}>
        <Select
          label="País"
          placeholder="Selecciona primero tu país"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setState('');
          }}
          options={[
            { value: 'mx', label: 'México' },
            { value: 'es', label: 'España' },
          ]}
        />

        <Select
          label="Región/Estado"
          placeholder="Selecciona una región"
          value={state}
          onChange={(e) => setState(e.target.value)}
          disabled={!country}
          options={country ? states[country] || [] : []}
          helperText={!country ? 'Selecciona un país primero' : 'Selecciona tu región'}
        />

        {country && state && (
          <div style={styles.successBox}>
            ✓ Seleccionado: {states[country]?.find(s => s.value === state)?.label} ({country.toUpperCase()})
          </div>
        )}
      </form>
    </div>
  );
}

/**
 * Example 5: Select with Error Handling
 */
export function SelectWithErrorExample() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [validationState, setValidationState] = React.useState<ValidationState>('default');
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    setError('');

    if (value === '') {
      setValidationState('default');
    } else if (value === 'forbidden') {
      setValidationState('invalid');
      setError('Esta opción no está disponible en tu región');
    } else {
      setValidationState('valid');
    }
  };

  return (
    <div style={styles.exampleContainer}>
      <h2 style={styles.exampleTitle}>Manejo de Errores</h2>
      <Select
        label="Opciones Disponibles"
        placeholder="Elige una opción"
        value={selectedOption}
        onChange={handleChange}
        validation={validationState}
        options={[
          { value: 'standard', label: 'Plan Estándar' },
          { value: 'pro', label: 'Plan Pro' },
          { value: 'forbidden', label: 'Plan Enterprise (No disponible)' },
        ]}
        helperText={
          error ? `✗ ${error}` :
          validationState === 'valid' ? `✓ ${selectedOption} seleccionado` :
          'Selecciona un plan'
        }
      />
    </div>
  );
}

/**
 * Gallery Component - Main Export
 */
export function ExamplesGallery() {
  const [activeExample, setActiveExample] = React.useState<
    'country' | 'disabled' | 'form' | 'dependent' | 'error'
  >('country');

  const examples = [
    { id: 'country' as const, name: 'País', component: CountrySelectExample },
    { id: 'disabled' as const, name: 'Deshabilitado', component: DisabledSelectExample },
    { id: 'form' as const, name: 'Formulario', component: ProfileFormExample },
    { id: 'dependent' as const, name: 'Dependientes', component: DependentSelectsExample },
    { id: 'error' as const, name: 'Errores', component: SelectWithErrorExample },
  ];

  const ActiveComponent = examples.find(ex => ex.id === activeExample)?.component || CountrySelectExample;

  return (
    <div style={styles.galleryContainer}>
      <h1 style={styles.title}>Ejemplos de Uso - Select</h1>
      <p style={styles.subtitle}>
        Explora diferentes casos de uso del componente Select
      </p>

      <div style={styles.buttonGroup}>
        {examples.map(example => (
          <button
            key={example.id}
            onClick={() => setActiveExample(example.id)}
            style={{
              ...styles.exampleButton,
              ...(activeExample === example.id ? styles.exampleButtonActive : styles.exampleButtonInactive),
            }}
          >
            {example.name}
          </button>
        ))}
      </div>

      <div style={styles.exampleContent}>
        <ActiveComponent />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  galleryContainer: {
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
    marginBottom: '32px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '32px',
    flexWrap: 'wrap',
  },
  exampleButton: {
    padding: '12px 20px',
    border: '2px solid #e5e7eb',
    borderRadius: '6px',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 200ms ease-in-out',
  },
  exampleButtonActive: {
    background: '#588a9d',
    color: 'white',
    borderColor: '#588a9d',
    boxShadow: '0 4px 12px rgba(88, 138, 157, 0.3)',
  },
  exampleButtonInactive: {
    background: 'white',
    color: '#666',
    borderColor: '#e5e7eb',
  },
  exampleContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
  },
  exampleContainer: {
    padding: '40px 20px',
  },
  exampleTitle: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '24px',
    color: '#1a1a1a',
    borderBottom: '2px solid #588a9d',
    paddingBottom: '12px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
    maxWidth: '500px',
  },
  formStatus: {
    padding: '16px',
    borderRadius: '6px',
    marginTop: '12px',
  },
  formStatusSuccess: {
    color: '#28a745',
    fontWeight: 600,
    margin: 0,
  },
  formStatusWarning: {
    color: '#ff9800',
    fontWeight: 600,
    margin: 0,
  },
  successBox: {
    padding: '16px',
    backgroundColor: '#e8f5e9',
    borderRadius: '6px',
    color: '#2e7d32',
    fontWeight: 600,
    marginTop: '12px',
  },
};

