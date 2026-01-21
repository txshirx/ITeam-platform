import React, { useState } from 'react';
import styles from './Header.module.css';
import { NAV_ITEMS } from '@/pages/onboarding/model/constants';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/config/router/routes';

interface HeaderProps {
  scrolled?: boolean;
  navItems?: any[];
  onLogin?: () => void;
  onSignUp?: () => void;
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  scrolled, 
  navItems = NAV_ITEMS,
  onLogin,
  onSignUp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={styles.container_main}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <NavLink
          to={ROUTES.MAIN}
          className={styles.logo}
          
        >
          <div className={styles.logoIcon}>
            i
          </div>
          <span className={styles.logoText}>ITEAM</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={styles.navLink}
              
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to={ROUTES.LOGIN}>
            <button 
              className={styles.loginButton}
              onClick={onLogin}
            >
              Login
            </button>
          </NavLink>
          <NavLink to={ROUTES.AUTH}>
            <button 
              className={styles.signUpButton}
              onClick={onSignUp}
            >
              Sign Up
            </button>
          </NavLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg 
            className={styles.toggleIcon} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick();
                }}
              >
                {item.label}
              </a>
            ))}
            <div className={styles.mobileButtons}>
              <button 
                className={styles.mobileActionButton}
                onClick={() => {
                  handleNavClick();
                  onSignUp?.();
                }}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
    </div>
  );
};
