import { forwardRef } from 'react';
import './Input.css';
import { InputProps } from './types';

/**
 * Input Component
 * 
 * A fully-featured text input component with multiple validation states
 * matching Figma design specifications exactly.
 * 
 * States:
 * - default: Initial input state with light blue tint
 * - hover: Enhanced visual state on hover
 * - focus: Blue border with shadow effect
 * - valid: Green background with black text
 * - invalid: Red background with black text
 * - disabled: Gray background, cursor not-allowed
 * 
 * @example
 * <Input placeholder="Enter email" validation="default" />
 * <Input placeholder="Email" validation="valid" />
 * <Input placeholder="Invalid" validation="invalid" disabled={true} />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    validation = 'default',
    label,
    helperText,
    disabled,
    className,
    ...props
  }, ref) => {
    return (
      <div className="input-wrapper">
        {label && <label>{label}</label>}
        
        <div
          className={`
            input
            input--${validation}
            ${disabled ? 'input--disabled' : ''}
            ${className || ''}
          `.trim()}
        >
          <input
            ref={ref}
            type="text"
            className="input__field"
            disabled={disabled}
            {...props}
          />
        </div>
        
        {helperText && (
          <div className={`input-helper ${
            validation === 'invalid' ? 'input-helper--error' :
            validation === 'valid' ? 'input-helper--success' :
            ''
          }`}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
