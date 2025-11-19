'use client';
import Link from 'next/link';
import styles from './LoginPage.module.css';
import React from 'react';
import PostLoginForm from '@/actions/PostLoginForm';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function handleSubmitFormLogin(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    const response = await PostLoginForm({
      email,
      password,
    });

    if (response.token) {
      console.log('user has been authenticated');
    } else {
      console.log('error');
    }

    setLoading(false);
  }

  return (
    <section className={styles.loginSection}>
      <div className="container">
        <h1 className="font-72">Sign In</h1>
        <form className={styles.form} onSubmit={handleSubmitFormLogin}>
          <label htmlFor="email" className="font-25">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="font-25"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password" className="font-25">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="font-25"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="font-25">
            {loading ? 'Signing...' : 'Sign In'}
          </button>
        </form>
        <h2 className="font-25">
          Don't have an account ?{' '}
          <Link href="/login/register"> Register Now</Link>
        </h2>
      </div>
    </section>
  );
}
