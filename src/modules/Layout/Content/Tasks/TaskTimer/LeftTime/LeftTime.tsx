import { observer } from 'mobx-react';
import { Timer } from '../../../../../MobX/Timer';
import { IconPlus } from '../IconPlus';
import styles from './lefttime.module.css';

export const LeftTime = observer(({ timer }: { timer: Timer }) => {
  const twoDigits = (num: number) => String(num).padStart(2, '0');

  const secondsToDisplay = twoDigits(timer.secondsRemaining % 60);
  const minutesToDisplay = twoDigits(
    ((timer.secondsRemaining - (timer.secondsRemaining % 60)) / 60) % 60
  );

  function getAditionalCalss() {
    if (timer.status.timerStatus === 'Active') {
      return styles['leftTime' + timer.status.pomodoroStatus];
    }
    return null;
  }

  return (
    <div className={styles.leftTimeContainer}>
      <p
        className={styles.leftTime + ' ' + getAditionalCalss()}
      >{`${minutesToDisplay}:${secondsToDisplay}`}</p>

      <button
        className={styles.increaseTime}
        onClick={() => timer.increase(60)}
      >
        <IconPlus />
      </button>
    </div>
  );
});
