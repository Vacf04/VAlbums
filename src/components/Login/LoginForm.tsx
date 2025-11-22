'use client';
import styles from './LoginForm.module.css';
import React from 'react';
import login from '@/actions/login-form-post';
import Input from '../Form/Input';
import Message from '../Helper/Message';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessages, setErrorMessages] = React.useState<string[] | null>(
    null,
  );
  const [loading, setLoading] = React.useState(false);

  async function handleSubmitFormLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim().length <= 0 || password.trim().length <= 0) {
      setErrorMessages(['The fields Cannot be Empty.']);
      return;
    }

    setLoading(true);

    const response = await login({
      email,
      password,
    });

    if (response.success) {
      router.refresh();
      router.push('/');
    } else {
      setErrorMessages([response.error]);
    }

    setLoading(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitFormLogin}>
      <Input
        type="email"
        name="email"
        labelText="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="password"
        name="password"
        labelText="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {errorMessages &&
        errorMessages.map((message, index) => (
          <Message type="ERROR" message={message} key={index} />
        ))}
      <button type="submit" className="font-25" disabled={loading}>
        {loading ? 'Signing...' : 'Sign In'}
      </button>
    </form>
  );
}
