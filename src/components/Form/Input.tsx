import React from 'react';
import styles from './Input.module.css';

type InputWithPropsType = {
  name: string;
  labelText: string;
} & React.ComponentPropsWithRef<'input'>;

export default function Input({
  name,
  labelText,
  ...props
}: InputWithPropsType) {
  return (
    <>
      <label htmlFor={name} className={`font-25 ${styles.label}`}>
        {labelText}
      </label>
      <input name={name} {...props} className={`font-25 ${styles.input}`} />
    </>
  );
}
