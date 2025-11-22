import React from 'react';
import Input from '../Form/Input';
import styles from './LoginForm.module.css';
import Message from '../Helper/Message';
import register from '@/actions/register-form-post';
import { isValidEmail, isValidPassword } from '@/functions/validators';
import Link from 'next/link';

export default function RegisterForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [sucessMessage, setSuccessMessage] = React.useState<string | null>(
    null,
  );
  const [errorMessages, setErrorMessages] = React.useState<string[] | null>(
    null,
  );
  const [loading, setLoading] = React.useState(false);

  async function handleSubmitFormRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessages(null);
    setSuccessMessage(null);

    const currentErrors = [];

    if (name.trim().length === 0) {
      currentErrors.push('Name cannot be empty.');
    }

    if (!isValidEmail(email.trim())) {
      currentErrors.push('Invalid Email.');
    }

    if (!isValidPassword(password.trim())) {
      currentErrors.push(
        'Password must be at least 8 characters long and contain uppercase, lowercase, and numbers.',
      );
    }

    if (password !== confirmPassword) {
      currentErrors.push('Passwords do not match.');
    }

    if (currentErrors.length > 0) {
      setErrorMessages(currentErrors);
      return;
    }

    setLoading(true);
    const response = await register({
      name,
      email,
      password,
    });

    if (response.success) {
      setErrorMessages(null);
      setSuccessMessage('Successfully registered.');
    } else {
      setErrorMessages(response.error);
      setSuccessMessage(null);
    }

    setLoading(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitFormRegister}>
      <Input
        type="email"
        name="email"
        labelText="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        name="name"
        labelText="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
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
      <Message type="SUCCESS" message={sucessMessage} />
      {sucessMessage && (
        <Link
          href="/login"
          style={{ textDecoration: 'underline' }}
          className="font-25"
        >
          Login Now
        </Link>
      )}
      {errorMessages &&
        errorMessages.map((message, index) => (
          <Message type="ERROR" message={message} key={index} />
        ))}
      <button type="submit" className="font-25" disabled={loading}>
        {loading ? 'Signing...' : 'Sign Up'}
      </button>
    </form>
  );
}
