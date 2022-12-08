import { observer } from 'mobx-react';
import { myTimerMobX } from '../../../../MobX/Timer';
import { Buttons } from './Buttons';
import { LeftTime } from './LeftTime';
import { TaskHeader } from './TaskHeader';
import styles from './tasktimer.module.css';

export const TaskTimer = observer(() => {
  return (
    <article className={styles.article}>
      <TaskHeader />
      <div className={styles.container}>
        <LeftTime timer={myTimerMobX} />
        <p className={styles.currentTask}>Задача 1 - Сверстать сайт </p>
        <Buttons timer={myTimerMobX} />
      </div>
    </article>
  );
});
