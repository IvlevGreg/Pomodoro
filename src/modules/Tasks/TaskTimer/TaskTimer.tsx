import React from 'react';
import { ButtonMain } from '../../ButtonMain';
import { ButtonSecondary } from '../../ButtonSecondary';
import { IconPlus } from './IconPlus';
import { TaskHeader } from './TaskHeader';
import styles from './tasktimer.module.css';

export function TaskTimer() {
  return (
    <article>
      <TaskHeader />
      <div className={styles.container}>
        <div className={styles.leftTime}>25:00</div>
        <button className={styles.increaseTime}>
          <IconPlus />
        </button>
        <p className={styles.currentTask}>Задача 1 - Сверстать сайт </p>
        <ButtonMain text="Старт" />
        <ButtonSecondary text="Стоп" isDisabled={true} />
      </div>
    </article>
  );
}
