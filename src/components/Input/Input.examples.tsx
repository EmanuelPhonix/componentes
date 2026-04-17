import React from 'react';
import Input from './Input';
import './Input.css';

type ValidationState = 'default' | 'valid' | 'invalid';

/**
 * Example 1: Simple Email Input with Validation
 */
export function SimpleEmailExample() {
  const [email, setEmail] = React.useState('');
  const [validationState, setValidationState] = React.useState<ValidationState>('default');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value === '') {
      setValidationState('default');
    } else if (validateEmail(value)) {
      setValidationState('valid');
    } else {
      setValidationState('invalid');
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>Email Input with Validation</h2>
      <Input
        label="Email Address"
        placeholder="Ingrese Correo"
        type="email"
        value={email}
        onChange={handleEmailChange}
        validation={validationState}
        helperText={
          validationState === 'valid' ? '✓ Valid email' :
          validationState === 'invalid' ? '✗ Invalid email format' :
          'Enter a valid email address'
        }
      />
    </div>
  );
}

/**
 * Example 2: Disabled Input
 */
export function DisabledInputExample() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Disabled Input Field</h2>
      <Input
        label="Locked Field"
        placeholder="This field is disabled"
        disabled={true}
        helperText="This field cannot be edited"
      />
    </div>
  );
}

/**
 * Example 3: Contact Form with Full Validation
 */
export function ContactFormExample() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [validationStates, setValidationStates] = React.useState<{
    name: ValidationState;
    email: ValidationState;
    message: ValidationState;
  }>({
    name: 'default',
    email: 'default',
    message: 'default',
  });

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleFormChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'name') {
      setValidationStates(prev => ({
        ...prev,
        name: value.length >= 3 ? 'valid' : (value.length === 0 ? 'default' : 'invalid'),
      }));
    } else if (field === 'email') {
      if (value === '') {
        setValidationStates(prev => ({ ...prev, email: 'default' }));
      } else {
        setValidationStates(prev => ({
          ...prev,
          email: validateEmail(value) ? 'valid' : 'invalid',
        }));
      }
    } else if (field === 'message') {
      setValidationStates(prev => ({
        ...prev,
        message: value.length >= 10 ? 'valid' : (value.length === 0 ? 'default' : 'invalid'),
      }));
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>Contact Form</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
        <Input
          label="Full Name"
          placeholder="Ingrese su nombre"
          value={formData.name}
          onChange={(e) => handleFormChange('name', e.target.value)}
          validation={validationStates.name}
          helperText={
            validationStates.name === 'valid' ? '✓ Name is valid' :
            formData.name.length > 0 && validationStates.name === 'invalid' ? '✗ Name too short (min 3 chars)' :
            'At least 3 characters'
          }
        />

        <Input
          label="Email Address"
          placeholder="Ingrese Correo"
          type="email"
          value={formData.email}
          onChange={(e) => handleFormChange('email', e.target.value)}
          validation={validationStates.email}
          helperText={
            validationStates.email === 'valid' ? '✓ Valid email' :
            formData.email.length > 0 && validationStates.email === 'invalid' ? '✗ Invalid email format' :
            'Enter a valid email'
          }
        />

        <Input
          label="Message"
          placeholder="Ingrese su mensaje"
          value={formData.message}
          onChange={(e) => handleFormChange('message', e.target.value)}
          validation={validationStates.message}
          helperText={
            validationStates.message === 'valid' ? '✓ Message is ready' :
            formData.message.length > 0 && validationStates.message === 'invalid' ? '✗ Message too short (min 10 chars)' :
            'At least 10 characters'
          }
        />

        <button
          style={{
            padding: '12px',
            background: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            marginTop: '10px'
          }}
          onClick={(e) => {
            e.preventDefault();
            alert(`Form submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
          }}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

/**
 * Example 4: Search Input
 */
export function SearchInputExample() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div style={{ padding: '24px' }}>
      <h2>Search Input</h2>
      <Input
        label="Search"
        placeholder="Type to search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        helperText={searchQuery ? `Searching for "${searchQuery}"...` : 'Search results will appear below'}
      />
    </div>
  );
}

/**
 * Example 5: Password Input
 */
export function PasswordInputExample() {
  const [password, setPassword] = React.useState('');

  return (
    <div style={{ padding: '24px' }}>
      <h2>Password Input</h2>
      <Input
        label="Password"
        placeholder="Ingrese contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        validation={password.length >= 8 ? 'valid' : 'default'}
        helperText={password.length > 0 ? `${password.length} characters (min 8)` : 'Minimum 8 characters required'}
      />
    </div>
  );
}

/**
 * Example 6: Input with Icon/Status Indicator
 */
export function StatusIndicatorExample() {
  const [username, setUsername] = React.useState('');
  const [isAvailable, setIsAvailable] = React.useState<boolean | null>(null);

  const checkAvailability = async () => {
    if (!username) return;
    // Simulates API call to check username availability
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAvailable(username.length >= 3);
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>Username Availability Check</h2>
      <Input
        label="Username"
        placeholder="Ingrese nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={checkAvailability}
        validation={isAvailable === null ? 'default' : (isAvailable ? 'valid' : 'invalid')}
        helperText={
          isAvailable === null ? 'Leave the field to check availability' :
          isAvailable ? '✓ Username is available' :
          '✗ Username is not available'
        }
      />
    </div>
  );
}

/**
 * Examples Gallery Component
 * Displays all input examples together
 */
export function ExamplesGallery() {
  return (
    <div style={{ padding: '40px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '40px', color: '#333' }}>Input Component Examples</h1>

      {/* Example 1: Simple Email Input */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          1. Simple Email Input with Validation
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <SimpleEmailExample />
        </div>
      </section>

      {/* Example 2: Disabled Input */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          2. Disabled Input Field
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <DisabledInputExample />
        </div>
      </section>

      {/* Example 3: Contact Form */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          3. Contact Form with Full Validation
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <ContactFormExample />
        </div>
      </section>

      {/* Example 4: Search Input */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          4. Search Input
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <SearchInputExample />
        </div>
      </section>

      {/* Example 5: Password Input */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          5. Password Input
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <PasswordInputExample />
        </div>
      </section>

      {/* Example 6: Status Indicator */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>
          6. Username Availability Check
        </h2>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <StatusIndicatorExample />
        </div>
      </section>
    </div>
  );
}
