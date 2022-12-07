import React from 'react';
import styles from './taskheader.module.css';

export function TaskHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.currentTask}>Сверстать сайт</p>
      <p className={styles.currentPomodoro}>Помидор 1</p>
    </header>
  );
}
