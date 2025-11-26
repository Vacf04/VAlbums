import { ApiResponse } from '@/types/apiResponse';
import { ProductResponseType } from '@/types/product';
import Image from 'next/image';
import styles from './AlbumPage.module.css';
import Button from '../Button';
import productsGet from '@/actions/products-get';
import RecentAlbums from '../Home/RecentAlbums';

export default async function AlbumPage({
  data,
}: {
  data: ApiResponse<ProductResponseType>;
}) {
  const { success, data: albumData, error } = data;
  const recentAlbums = await productsGet({
    page: 1,
    limit: 3,
  });

  if (!albumData) return <p>Error</p>;
  return (
    <>
      <section className={`${styles.albumSection} fadeInUp`}>
        <div className={`${styles.albumContent} container`}>
          <div className={styles.albumData}>
            <h1 className="font-72">{albumData.name}</h1>
            <span className="font-40">${albumData.price}</span>
            <p className="font-25">{albumData.description}</p>
            <Button dark={true} href="/">
              Add to Cart
            </Button>
          </div>
          <div>
            <Image
              src={albumData.imageUrl}
              height={500}
              width={500}
              alt={albumData.name}
            />
          </div>
        </div>
      </section>
      {recentAlbums && <RecentAlbums recentProducts={recentAlbums} />}
    </>
  );
}
