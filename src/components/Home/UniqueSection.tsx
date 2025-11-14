import styles from './UniqueSection.module.css';

export default function UniqueSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className="font-72">We have a unique catalogue.</h1>
        <p className="font-40">
          Unearth a curated collection of rare gems and limited pressings—the
          records you won't discover in any ordinary store.
        </p>
      </div>
    </section>
  );
}
