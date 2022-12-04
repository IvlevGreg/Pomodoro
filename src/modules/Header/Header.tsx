import React from 'react';
import { Logo } from '../Logo';
import styles from './header.module.css';
import { Links } from './Links';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Links />
    </header>
  );
}
