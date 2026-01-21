import React from 'react';
import styles from './Input.module.css';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string, error?: string }>(
  ({ label, error, ...props }, ref) => (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...props}
      />
      {error && typeof error === 'string' && <span className={styles.error}>{error}</span>}
    </div>
  )
);

Input.displayName = 'Input';