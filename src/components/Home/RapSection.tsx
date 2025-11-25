import styles from './RapSection.module.css';
import Button from '../Button';
import Image from 'next/image';

export default function RapSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageContent}>
        <Image src="/home/rap-section.webp" alt="" width={1920} height={1280} />
      </div>
      <div className={styles.textContent}>
        <h1 className="font-72">The best of Rap Music is Here.</h1>
        <Button href="/albums?category='Rap'" dark={false}>
          See Rap Albums.
        </Button>
      </div>
    </section>
  );
}
