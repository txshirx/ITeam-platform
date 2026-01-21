import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/router/routes';

interface UserAvatar {
  id: number;
  src: string;
  alt: string;
}

interface HeroProps {
  avatars?: UserAvatar[];
  userCount?: number;
}

const Hero: React.FC<HeroProps> = ({ 
}) => {
  const codeSnippet = `class Candidate(Developer):
  def __init__(self, skills):
    self.ready = False
    self.offer = None

  def prepare_with_iteam(self):
    while not self.ready:
      self.practice_ai_mock()
      self.study_system_design()
      self.solve_leetcode_hard()
      if self.performance > 0.95:
        self.ready = True

  def get_job(self):
    print("Welcome to ITeam!")`;

  return (
    <section className={styles.hero}>
      {/* Background decorative elements */}
      <div className={styles.blobTopRight}></div>
      <div className={styles.blobBottomLeft}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}

          {/* Main heading */}
          <h1 className={styles.heading}>
            Найди работу в{' '}
            <span className={styles.gradientText}>лучших IT компаниях</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Создавай персонализированные собеседования и прокачивай навыки
          </p>

          {/* CTA Buttons */}
          <div className={styles.buttons}>
            <Link to={ROUTES.QUESTIONS}>
              <button className={styles.primaryButton}>
                Вопросы 
              </button>
            </Link>
            <Link to={ROUTES.QUIZ.CREATE}>
              <button className={styles.secondaryButton}>
                <span>Собеседование</span>
                <svg 
                  className={styles.arrowIcon} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Code snippet section */}
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.codeHeader}>
              <div className={styles.windowControls}>
                <div className={styles.controlDotRed}></div>
                <div className={styles.controlDotYellow}></div>
                <div className={styles.controlDotGreen}></div>
              </div>
              <span className={styles.fileName}>interview_session.py</span>
            </div>
            <pre className={styles.codeBlock}>
              <code>{codeSnippet}</code>
            </pre>
          </div>
          
          {/* Decorative elements */}
          <div className={styles.decorativeBlur}></div>
          <div className={styles.decorativeBorder}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;