import React from 'react';
import { TaskList } from './TaskList';
import styles from './tasks.module.css';
import { TaskTimer } from './TaskTimer';

export function Tasks() {
  return (
    <section>
      <TaskList />
      <TaskTimer />
    </section>
  );
}
