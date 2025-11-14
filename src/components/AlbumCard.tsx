import styles from './AlbumCard.module.css';
import Image from 'next/image';

export default function AlbumCard({ src, alt }: { src: string; alt: string }) {
  return (
    <article className={styles.article}>
      <div className={styles.productImageContainer}>
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productData}>
        <h1 className="font-40">Blonde</h1>
        <p className="font-40">$99</p>
      </div>
    </article>
  );
}
