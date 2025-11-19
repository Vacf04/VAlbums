'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  function scrolled() {
    if (window.scrollY > 5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  React.useEffect(() => {
    if (pathname === '/') {
      scrolled();
      window.addEventListener('scroll', scrolled);
      return () => {
        window.removeEventListener('scroll', scrolled);
      };
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
    >
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
              <Link href={'/login'}>
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
