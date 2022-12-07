import React from 'react';
import styles from './buttonsecondary.module.css';

interface IButtonSecondary {
  text: string;
  isDisabled?: boolean;
}

export function ButtonSecondary({ text, isDisabled }: IButtonSecondary) {
  return (
    <button className={styles.button} disabled={isDisabled}>
      {text}
    </button>
  );
}
