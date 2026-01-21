import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  isLoading, 
  variant = 'primary', 
  ...props 
}) => {
  const variantClass = styles[variant];
  
  return (
    <button
      disabled={isLoading}
      className={`${styles.button} ${variantClass} ${isLoading ? styles.disabled : ''}`}
      {...props}
    >
      {isLoading ? (
        <div className={styles.spinner}></div>
      ) : children}
    </button>
  );
};