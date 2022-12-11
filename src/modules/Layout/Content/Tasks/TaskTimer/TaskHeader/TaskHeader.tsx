import React from 'react';
import { Timer } from '../../../../../MobX/Timer';
import styles from './taskheader.module.css';

export function TaskHeader({ timer }: { timer: Timer }) {
  return (
    <header className={styles.header + ' ' + styles[timer.pomodoroStatus]}>
      <p className={styles.currentTask}>Сверстать сайт</p>
      <p className={styles.currentPomodoro}>
        {(timer.pomodoroStatus.includes('BREAK') ? 'Перерыв' : 'Помидор') +
          ' ' +
          timer.pomodoroNumber}
      </p>
    </header>
  );
}
