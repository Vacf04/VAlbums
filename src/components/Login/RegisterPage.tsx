'use client';
import Link from 'next/link';
import styles from './LoginPage.module.css';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
  return (
    <section className={styles.loginSection}>
      <div className="container">
        <h1 className="font-72">Sign Up</h1>
        <RegisterForm />
        <h2 className="font-25">
          Already have an account ? <Link href="/login"> Login Now</Link>
        </h2>
      </div>
    </section>
  );
}
