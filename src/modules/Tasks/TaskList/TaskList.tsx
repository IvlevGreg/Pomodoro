import React from 'react';
import { Dropdown } from '../../Dropdown';
import { GetStarted } from './GetStarted';
import { TaskForm } from './TaskForm';
import styles from './tasklist.module.css';

export function TaskList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ура! Теперь можно начать работать:</h2>
      <GetStarted />
      <TaskForm />
      <ol className={styles.list}>
        <li className={styles.item}>
          <span className={styles.taskNumber}>12</span>
          <span className={styles.taskName}>Сверстать сайт</span>
          <Dropdown
            // onOpen={() => console.log('open')}
            // onClose={() => console.log('closed')}
            isOpen={false}
            dropdownContentRootId={'dropdown_root'}
            button={
              <button
                onClick={(e: React.MouseEvent) => {
                  const node = document.getElementById('dropdown_root');
                  if (!node) return;
                  node.style.position = 'absolute';
                  node.style.top = `${e.pageY}px`;
                  node.style.left = `${e.pageX}px`;
                }}
                className={styles.menuButton}
              >
                12
              </button>
            }
          >
            <div className={styles.dropdown}>
              2112
              <button className={styles.closeButton}>Закрыть</button>
            </div>
          </Dropdown>
        </li>
      </ol>
    </div>
  );
}
