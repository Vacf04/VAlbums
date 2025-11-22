import styles from './Message.module.css';

export default function Message({
  message,
  type,
}: {
  message: string | null;
  type: 'ERROR' | 'SUCCESS';
}) {
  if (!message) return null;
  return (
    <p
      className={`font-25 ${type === 'ERROR' ? styles.error : styles.success}`}
    >
      {message}
    </p>
  );
}
