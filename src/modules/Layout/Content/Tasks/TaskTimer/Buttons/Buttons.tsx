import { observer } from 'mobx-react';
import { ButtonMain } from '../../../../../Common/ButtonMain';
import { ButtonSecondary } from '../../../../../Common/ButtonSecondary';
import { Timer } from '../../../../../MobX/Timer';
import styles from './buttons.module.css';

export const Buttons = observer(({ timer }: { timer: Timer }) => {
  return (
    <div className={styles.buttons}>
      <ButtonMain
        text="Старт"
        isDisabled={timer.isTimerStart()}
        onClick={timer.startTimer}
      />
      <ButtonSecondary
        text="Стоп"
        isDisabled={timer.isTimerStop()}
        onClick={timer.stopTimer}
      />
    </div>
  );
});
