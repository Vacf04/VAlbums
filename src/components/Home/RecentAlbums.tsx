import styles from './RecentAlbums.module.css';
import Button from '../Button';
import AlbumCard from '../AlbumCard';

export default function RecentAlbums() {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.headerSection}>
          <h1 className="font-72">Recent Albums.</h1>
          <Button href="/albums" dark={true}>
            See All.
          </Button>
        </header>
        <div className={styles.productsGrid}>
          <AlbumCard
            src="https://cdn-images.dzcdn.net/images/cover/f798a866107715dd6dc1049e498ce21f/0x1900-000000-80-0-0.jpg"
            alt="test"
          />
          <AlbumCard
            src="https://cdn-images.dzcdn.net/images/cover/f798a866107715dd6dc1049e498ce21f/0x1900-000000-80-0-0.jpg"
            alt="test"
          />
          <AlbumCard
            src="https://cdn-images.dzcdn.net/images/cover/f798a866107715dd6dc1049e498ce21f/0x1900-000000-80-0-0.jpg"
            alt="test"
          />
        </div>
      </div>
    </section>
  );
}
