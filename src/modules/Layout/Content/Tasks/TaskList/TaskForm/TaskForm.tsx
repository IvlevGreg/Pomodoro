import React from 'react';
import { ButtonMain } from '../../../../../Common/ButtonMain';
import styles from './taskform.module.css';

export function TaskForm() {
  return (
    <form action="" className={styles.form}>
      <input type="text" className={styles.inputTask} />
      <ButtonMain text="Добавить" />
    </form>
  );
}
