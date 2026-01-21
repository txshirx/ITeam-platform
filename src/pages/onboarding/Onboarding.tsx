import React, { useState, useEffect } from 'react';
import styles from './Onboarding.module.css';
import { Header } from '@/widgets/Header';
import Hero from './ui/Hero/Hero';
import Features from './ui/Features/Features';
import AIDemo from './ui/AIDemo/AIDemo';


export const OnboardingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartPractice = () => {
    console.log('Start practice clicked');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAIGenerate = (topic: string, question: string) => {
    console.log('AI Generated:', { topic, question });
  };

  return (
    <div className={styles.app}>
      <Header 
        scrolled={scrolled} 
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        onLogoClick={handleLogoClick}
      />
      
      <main className={styles.main}>
        <Hero />
        
        <section id="features" className={styles.sectionDark}>
          <div className={styles.container}>
            <Features />
          </div>
        </section>

        <section id="ai-demo" className={styles.sectionCard}>
          <div className={styles.containerNarrow}>
            <AIDemo />
          </div>
        </section>

      </main>
    </div>
  );
};
