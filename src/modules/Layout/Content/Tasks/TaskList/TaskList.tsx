import { observer } from 'mobx-react';
import React from 'react';
import { Dropdown } from '../../../../Common/Dropdown';
import { Timer } from '../../../../MobX/Timer';
import { DropdownDecrementIcon } from './dropdownDecrementIcon';
import { DropdownDeleteIcon } from './dropdownDeleteIcon';
import { DropdownEditcon } from './dropdownEditIcon';
import { DropdownIncrementIcon } from './dropdownIncrementIcon';
import { DropdownOpenButtonIcon } from './dropdownOpenButtonIcon';
import { GetStarted } from './GetStarted';
import { TaskForm } from './TaskForm';
import styles from './tasklist.module.css';

export function TaskList() {
  const myTimer = new Timer();

  // Build a "user interface" that uses the observable state.
  const TimerView = observer(({ timer }: { timer: Timer }) => (
    <button onClick={() => timer.reset()}>
      Seconds passed: {timer.secondsPassed}
    </button>
  ));

  // Update the 'Seconds passed: X' text every second.
  setInterval(() => {
    myTimer.increase();
  }, 1000);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ура! Теперь можно начать работать:</h2>
      <GetStarted />
      <TaskForm />
      <ol className={styles.list}>
        <li className={styles.item}>
          <span className={styles.taskNumber}>12</span>

          <span className={styles.taskName}>Сверстать сайт</span>

          <TimerView timer={myTimer} />

          <Dropdown
            // onOpen={() => console.log('open')}
            // onClose={() => console.log('closed')}
            isOpen={false}
            dropdownContentRootId={'dropdown_root'}
            button={
              <button
                className={styles.dropdownButtonOpen}
                onClick={(e: React.MouseEvent) => {
                  const node = document.getElementById('dropdown_root');
                  if (!node) return;
                  node.style.position = 'absolute';
                  node.style.top = `${e.pageY}px`;
                  node.style.left = `${e.pageX}px`;
                }}
              >
                <DropdownOpenButtonIcon />
              </button>
            }
          >
            <ul className={styles.dropdownList}>
              <li className={styles.dropdownItem}>
                <button className={styles.dropdownButton}>
                  <DropdownIncrementIcon />
                  Увеличить
                </button>
              </li>

              <li className={styles.dropdownItem}>
                <button className={styles.dropdownButton}>
                  <DropdownDecrementIcon />
                  Уменьшить
                </button>
              </li>

              <li className={styles.dropdownItem}>
                <button className={styles.dropdownButton}>
                  <DropdownEditcon />
                  Редактировать
                </button>
              </li>

              <li className={styles.dropdownItem}>
                <button className={styles.dropdownButton}>
                  <DropdownDeleteIcon />
                  Удалить
                </button>
              </li>
            </ul>
          </Dropdown>
        </li>
      </ol>
    </div>
  );
}
