import React from 'react';
import { GetStarted } from './GetStarted';
import { TaskForm } from './TaskForm';
import styles from './tasklist.module.css';

export function TaskList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ура! Теперь можно начать работать:</h2>
      <GetStarted />
      <TaskForm />
    </div>
  );
}
