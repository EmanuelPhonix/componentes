import { forwardRef } from 'react';
import './Select.css';
import { SelectProps } from './types';

/**
 * Select Component
 * 
 * A fully-featured select dropdown component with multiple validation states
 * matching Figma design specifications exactly.
 * 
 * States:
 * - default: Initial select state with light blue tint
 * - hover: Enhanced visual state on hover
 * - focus: Blue border effect
 * - valid: Green background with black text
 * - invalid: Red background with black text
 * - disabled: Gray background, cursor not-allowed
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({
    validation = 'default',
    label,
    helperText,
    disabled,
    className,
    options = [],
    placeholder,
    value,
    defaultValue,
    ...props
  }, ref) => {
    return (
      <div className="select-wrapper">
        {label && <label>{label}</label>}
        
        <div
          className={`
            select
            select--${validation}
            ${disabled ? 'select--disabled' : ''}
            ${className || ''}
          `.trim()}
        >
          <select
            ref={ref}
            className="select__field"
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            {...props}
          >
            {placeholder && (
              <option value="">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="select__icon">▼</span>
        </div>
        
        {helperText && (
          <div className={`select-helper ${
            validation === 'invalid' ? 'select-helper--error' :
            validation === 'valid' ? 'select-helper--success' :
            ''
          }`}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
