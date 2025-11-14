import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
  href,
  children,
  dark,
}: {
  href: string;
  children: React.ReactNode;
  dark: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${
        dark ? styles.buttonDark : styles.buttonLight
      } font-40`}
    >
      {children}
    </Link>
  );
}
