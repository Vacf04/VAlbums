import Link from 'next/link';
import styles from './Header.module.css';
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <nav className={styles.mainNav}>
          <span className="font-40">VAlbums</span>
          <ul className={`font-25 ${styles.mainMenu}`}>
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
        <nav className={styles.secondaryNav}>
          <ul className={styles.secondaryMenu}>
            <li className={styles.searchItemNav}>
              <SearchIcon />
              <input
                type="text"
                className={`${styles.search} font-25`}
                placeholder="What you wanna hear ?"
              />
            </li>
            <li>
              <Link href={'/account'}>
                <UserIcon />
              </Link>
            </li>
            <li>
              <Link href={'/cart'}>
                <ShoppingCartIcon />
              </Link>
            </li>
            <li className={styles.menuIconItemNav}>
              <button>
                <MenuIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
