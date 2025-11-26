import styles from './Loading.module.css';

export default function Loading({ fullPage }: { fullPage: boolean }) {
  if (fullPage)
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}></div>
      </div>
    );
  return <div className={styles.loading}></div>;
}
