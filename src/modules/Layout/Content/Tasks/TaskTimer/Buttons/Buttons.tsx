import { observer } from 'mobx-react';
import { ButtonMain } from '../../../../../Common/ButtonMain';
import { ButtonSecondary } from '../../../../../Common/ButtonSecondary';
import { Timer } from '../../../../../MobX/Timer';
import styles from './buttons.module.css';

export const Buttons = observer(({ timer }: { timer: Timer }) => {
  return (
    <div className={styles.buttons}>
      <ButtonMain text={timer.status.startButtonText} onClick={timer.startTimer} />
      <ButtonSecondary
        text={timer.status.stopButtonText}
        isDisabled={timer.status.stopButtonIsDisabled}
        onClick={timer.stopTimer}
      />
    </div>
  );
});
