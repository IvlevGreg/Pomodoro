import React from 'react';
import { ButtonMain } from '../../../../Common/ButtonMain';
import { ButtonSecondary } from '../../../../Common/ButtonSecondary';
import { IconPlus } from './IconPlus';
import { TaskHeader } from './TaskHeader';
import styles from './tasktimer.module.css';
import TestTimer from './timer';

export function TaskTimer() {
  return (
    <article className={styles.article}>
      <TaskHeader />
      <div className={styles.container}>
        <div className={styles.leftTimeContainer}>
          <p className={styles.leftTime}>25:00</p>
          <TestTimer />
          <button className={styles.increaseTime}>
            <IconPlus />
          </button>
        </div>
        <p className={styles.currentTask}>Задача 1 - Сверстать сайт </p>
        <div className={styles.buttons}>
          {/* <ButtonMain text="Старт" />
          <ButtonSecondary text="Стоп" isDisabled={true} /> */}
        </div>
      </div>
    </article>
  );
}
