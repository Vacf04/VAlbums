'use client';
import Link from 'next/link';
import styles from './LoginPage.module.css';
import React from 'react';
import login from '@/actions/login-form-post';
import { redirect } from 'next/navigation';
import Input from '../Form/Input';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [message, setMessage] = React.useState<string | null>('');
  const [loading, setLoading] = React.useState(false);

  async function handleSubmitFormRegister(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    if (!email || !password || !confirmPassword)
      setMessage('You need to fill in the fields.');
    if (password !== confirmPassword) setMessage('Password need to match.');
    const response = await login({
      email,
      password,
    });

    if (response.success) {
      redirect('/');
    } else {
      setMessage(response.error);
    }

    setLoading(false);
  }

  return (
    <section className={styles.loginSection}>
      <div className="container">
        <h1 className="font-72">Sign Up</h1>
        <form className={styles.form} onSubmit={handleSubmitFormRegister}>
          <Input
            type="email"
            name="email"
            labelText="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            name="password"
            labelText="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            name="confirmPassword"
            labelText="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {message && <p className="font-25">{message}</p>}
          <button type="submit" className="font-25">
            {loading ? 'Signing...' : 'Sign Up'}
          </button>
        </form>
        <h2 className="font-25">
          You have a account ? <Link href="/login"> Login Now</Link>
        </h2>
      </div>
    </section>
  );
}
