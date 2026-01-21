import { FEATURES } from '../../model/constants';
import styles from './Features.module.css';


const Features = ({ features = FEATURES }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>ITeam</h2>
        <h3 className={styles.title}>
          Все что тебе нужно для <span className={styles.brand}>успеха</span>
        </h3>
      </div>
      
      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={`${styles.card} ${styles[`card-${idx + 1}`]}`}
          >
            <div className={styles.iconContainer}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
            </div>
            <h4 className={styles.cardTitle}>{feature.title}</h4>
            <p className={styles.cardDescription}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;