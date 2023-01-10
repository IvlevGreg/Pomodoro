import { observer } from 'mobx-react';
import React from 'react';
import { Timer } from '../../../../../MobX/Timer';
import styles from './taskheader.module.css';

export const TaskHeader = observer(({ timer }: { timer: Timer }) => {
  function getAditionalCalss() {
    return styles[timer.status.pomodoroStatus];
  }
  return (
    <header className={styles.header + ' ' + getAditionalCalss()}>
      <p className={styles.currentTask}>Сверстать сайт</p>
      <p className={styles.currentPomodoro}>
        {(timer.status.pomodoroStatus.includes('Break')
          ? 'Перерыв'
          : 'Помидор') +
          ' ' +
          timer.pomodoroNumber}
      </p>
    </header>
  );
});
