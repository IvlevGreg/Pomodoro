import React from 'react';
import styles from './buttonsecondary.module.css';

interface IButtonSecondary {
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export function ButtonSecondary({
  text,
  isDisabled,
  onClick,
}: IButtonSecondary) {
  return (
    <button className={styles.button} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}
