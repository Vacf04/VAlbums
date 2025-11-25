import { ProductResponseType } from '@/actions/products-get';
import styles from './AlbumCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AlbumCard({ data }: { data: ProductResponseType }) {
  return (
    <article className={styles.article}>
      <Link href={`/album/${data.id}`}>
        <div className={styles.productImageContainer}>
          <Image
            src={data.imageUrl}
            alt={data.name}
            width={500}
            height={500}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productData}>
          <h1 className="font-40">{data.name}</h1>
          <p className="font-40">${data.price}</p>
        </div>
      </Link>
    </article>
  );
}
