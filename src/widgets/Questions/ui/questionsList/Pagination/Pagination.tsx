import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ 
  total, 
  page, 
  limit, 
  onPageChange,
  className = '' 
}) => {
  const totalPages = Math.ceil(total / limit);
  
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showMax = 5;
    
    if (totalPages <= showMax) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push('...');
      
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (page < totalPages - 2) pages.push('...');
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  const handlePrevClick = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };

  return (
    <div className={`${styles.paginationContainer} ${className}`}>
      <div className={styles.pagination}>
        <button
          onClick={handlePrevClick}
          disabled={page === 1}
          className={styles.navButton}
          aria-label="Предыдущая страница"
        >
          <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className={styles.pagesWrapper}>
          {getPageNumbers().map((p, idx) => (
            <button
              key={idx}
              onClick={() => typeof p === 'number' && onPageChange(p)}
              disabled={p === '...'}
              className={`${styles.pageButton} ${
                p === page 
                  ? styles.active 
                  : p === '...' 
                    ? styles.ellipsis
                    : styles.inactive
              }`}
              aria-current={p === page ? 'page' : undefined}
              aria-label={typeof p === 'number' ? `Страница ${p}` : undefined}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextClick}
          disabled={page === totalPages}
          className={styles.navButton}
          aria-label="Следующая страница"
        >
          <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;