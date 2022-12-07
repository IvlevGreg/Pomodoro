import React from 'react';
import styles from './buttonmain.module.css';

interface IButtonMain {
  text: string;
}

export function ButtonMain({ text }: IButtonMain) {
  return <button className={styles.button}>{text}</button>;
}
