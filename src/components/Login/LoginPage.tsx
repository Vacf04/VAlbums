'use client';
import Link from 'next/link';
import styles from './LoginPage.module.css';
import React from 'react';
import login from '@/actions/login-form-post';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function handleSubmitFormLogin(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    if (!email || !password) setMessage('You need to fill in the fields.');
    const data = await login({
      email,
      password,
    });

    if (data.token) {
      redirect('/');
    } else {
      setMessage(data.message);
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
          <p className="font-25">{message}</p>
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
