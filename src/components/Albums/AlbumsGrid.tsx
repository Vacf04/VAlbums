import { ProductResponseType } from '@/actions/products-get';
import styles from './AlbumsGrid.module.css';
import AlbumCard from '../AlbumCard';

export default function AlbumsGrid({ data }: { data: ProductResponseType[] }) {
  return (
    <div className={styles.albumsGrid}>
      {data.map((product) => (
        <AlbumCard data={product} key={product.id} />
      ))}
    </div>
  );
}
