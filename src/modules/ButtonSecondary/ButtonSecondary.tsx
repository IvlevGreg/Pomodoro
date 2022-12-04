import React from 'react';
import styles from './buttonsecondary.module.css';

interface IButtonSecondary {
  text: string;
}

export function ButtonSecondary({ text }: IButtonSecondary) {
  return <button className={styles.secondary}>{text}</button>;
}
