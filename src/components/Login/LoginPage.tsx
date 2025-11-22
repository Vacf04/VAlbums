import Link from 'next/link';
import styles from './LoginPage.module.css';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <section className={styles.loginSection}>
      <div className="container">
        <h1 className="font-72">Sign In</h1>
        <LoginForm />
        <h2 className="font-25">
          Don't have an account ?{' '}
          <Link href="/login/register"> Register Now</Link>
        </h2>
      </div>
    </section>
  );
}
