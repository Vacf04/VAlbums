import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${styles.button} font-40`}>
      {children}
    </Link>
  );
}
