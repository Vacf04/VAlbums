import styles from './Introduction.module.css';
import Button from '../Button';

export default function Introduction() {
  return (
    <section className={styles.heroImage}>
      <div className={styles.overlay}></div>
      <div className="container">
        <h1 className="font-72">Your Next Favorite Album Is Here.</h1>
        <Button href="/albums" dark={false}>
          Shop Here.
        </Button>
      </div>
    </section>
  );
}
