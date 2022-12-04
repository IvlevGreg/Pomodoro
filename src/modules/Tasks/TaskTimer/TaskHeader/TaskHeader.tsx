import React from 'react';
import styles from './taskheader.module.css';

export function TaskHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.currentTask}>Сверстать сайт</div>
      <div className={styles.currentPomodoro}>Помидор 1</div>
    </header>
  );
}
