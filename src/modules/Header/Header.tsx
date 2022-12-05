import React from 'react';
import { Logo } from '../Logo';
import styles from './header.module.css';
import { Links } from './Links';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Links />
        <h1 className={styles.title}>
          Трекер задач с таймером по методу «Помодоро»
        </h1>
      </div>
    </header>
  );
}
