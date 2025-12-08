import styles from './SkeletonLoaderCard.module.css';

export default function SkeletonLoaderCard() {
  return (
    <div className={styles.card}>
      <div className={styles.shimmer} />
    </div>
  );
}
