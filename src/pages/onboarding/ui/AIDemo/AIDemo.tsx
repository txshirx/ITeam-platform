import React, { useState } from 'react';
import styles from './AIDemo.module.css';
import { questionsQuery } from '@/entities/questions';
import { Navigate, replace, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/shared/config/router/routes';


interface AIDemoProps {
  initialTopic?: string;
}

const AIDemo: React.FC<AIDemoProps> = ({ 
  initialTopic = 'JS',
}) => {
  const navigate = useNavigate()
  const [topic, setTopic] = useState(initialTopic);


  const getQuestionsHandler = () => {
    navigate(`${ROUTES.QUESTIONS}?title=${topic}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.decorativeIcon}>
        <svg className={styles.iconSvg} fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.09-.36.14-.57.14s-.41-.05-.57-.14l-7.9-4.44c-.31-.17-.53-.5-.53-.88v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.09.36-.14.57-.14s.41.05.57.14l7.9 4.44c.31.17.53.5.53.88v9z" />
        </svg>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>Найди интересующий тебя вопрос!</h3>

        <div className={styles.inputGroup}>
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={styles.input}
            placeholder="Enter topic (e.g. Distributed Systems)"
            aria-label="Enter interview topic"
          />
          <button 
            className={styles.generateButton}
            aria-label="Generate interview question"
            onClick={getQuestionsHandler}
          >
            {'Найти'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIDemo;