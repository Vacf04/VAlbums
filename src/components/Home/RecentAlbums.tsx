import styles from './RecentAlbums.module.css';
import Button from '../Button';
import AlbumCard from '../AlbumCard';
import { ProductsResponseType } from '@/types/product';
import Message from '../Helper/Message';
import { ApiResponse } from '@/types/apiResponse';

export default function RecentAlbums({
  recentProducts,
}: {
  recentProducts: ApiResponse<ProductsResponseType>;
}) {
  const { success, data, error } = recentProducts;

  return (
    <section className={`${styles.section} fadeInUp`}>
      <div className="container">
        <header className={styles.headerSection}>
          <h1 className="font-72">Recent Albums.</h1>
          <Button href="/albums" dark={true}>
            See All.
          </Button>
        </header>
        <div className={styles.productsGrid}>
          {error && <Message type="ERROR" message={error[0]} />}
          {data &&
            data.data.map((product) => (
              <AlbumCard data={product} key={product.id} />
            ))}
        </div>
      </div>
    </section>
  );
}
