import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './buttonmain.module.css';

interface IButtonMain {
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export function ButtonMain({ text, isDisabled, onClick }: IButtonMain) {
  return (
    <button className={styles.button} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}
