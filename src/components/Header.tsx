import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <span className={styles.logo}>VAlbums</span>
        <nav>
          <ul></ul>
        </nav>
      </div>
    </header>
  );
}
