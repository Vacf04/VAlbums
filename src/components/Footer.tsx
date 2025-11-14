import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <span className="font-40">VAlbums</span>
          <p className="font-25">The best store of music albums of all time.</p>
        </div>
        <div>
          <h3 className="font-40">Contact</h3>
          <p className="font-25">Email@email.com</p>
          <p className="font-25">Email@email.com</p>
        </div>
        <div>
          <nav className={styles.navFooter}>
            <ul className={`font-40`}>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/albums'}>Albums</Link>
              </li>
              <li>
                <Link href={'/albums?category="Rap"'}>Rap</Link>
              </li>
              <li>
                <Link href={'/albums?category="Rock"'}>Rock</Link>
              </li>
            </ul>
          </nav>
          <p className={`font-25 ${styles.byVittor}`}>By Víttor Franceschi</p>
        </div>
      </div>
    </footer>
  );
}
