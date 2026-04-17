import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Validation state of the input
   * @default "default"
   */
  validation?: 'default' | 'valid' | 'invalid';
  
  /**
   * Optional label text
   */
  label?: string;
  
  /**
   * Optional helper text displayed below input
   */
  helperText?: string;
  
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
}
