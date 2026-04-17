import { SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Validation state of the select
   * @default "default"
   */
  validation?: 'default' | 'valid' | 'invalid';
  
  /**
   * Optional label text
   */
  label?: string;
  
  /**
   * Optional helper text displayed below select
   */
  helperText?: string;
  
  /**
   * Whether the select is disabled
   */
  disabled?: boolean;
  
  /**
   * Array of options
   */
  options?: SelectOption[];
  
  /**
   * Placeholder text
   */
  placeholder?: string;
}
