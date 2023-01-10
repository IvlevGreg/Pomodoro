import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

// Model the application state.
// interface ITimer{
//   increase: () => void

// reset: () => void
// }

type TPomodoroStatus = 'Pomodoro' | 'Break' | 'NotStart';
type TTimerStatus = 'Active' | 'Pause';
type TStartButtonText = 'Старт' | 'Продолжить' | 'Пауза';
type TStopButtonText = 'Стоп' | 'Пропустить' | 'Сделано';
type TOppositeStatus =
  | 'POMODORO_PAUSE_STATUS'
  | 'POMODORO_ACTIVE_STATUS'
  | 'POMODORO_PAUSE_STATUS'
  | 'BREAK_ACTIVE_STATUS'
  | 'BREAK_PAUSE_STATUS'
  | 'INITIAL_OVERALL_STATUS';
type TNextStatus = 'POMODORO_PAUSE_STATUS' | 'BREAK_PAUSE_STATUS';

interface IStatus {
  pomodoroStatus: TPomodoroStatus;
  timerStatus: TTimerStatus;

  startButtonText: TStartButtonText;
  stopButtonText: TStopButtonText;
  stopButtonIsDisabled: boolean;
  oppositeStatus: TOppositeStatus;
  nextStatus: TNextStatus;
  initialSeconds: number;
}

export class Timer {
  initialValue = 1500;
  initialValuePomodro = 1500;
  initialValueShortBreak = 300;
  initialValueLongBreak = 900;

  secondsRemaining = this.initialValue;
  currentInterval: NodeJS.Timer | null = null;
  // pomodoroStatus: TPomodoroStatus = 'NotStart';
  // timerStatus: TTimerStatus = 'PAUSE';
  pomodoroNumber: 1 | 2 | 3 | 4 = 1;

  private INITIAL_OVERALL_STATUS: IStatus = {
    pomodoroStatus: 'NotStart',
    timerStatus: 'Pause',
    startButtonText: 'Старт',
    stopButtonText: 'Стоп',
    stopButtonIsDisabled: true,
    oppositeStatus: 'POMODORO_ACTIVE_STATUS',
    nextStatus: 'POMODORO_PAUSE_STATUS',
    initialSeconds: this.initialValuePomodro,
  };

  private POMODORO_ACTIVE_STATUS: IStatus = {
    pomodoroStatus: 'Pomodoro',
    timerStatus: 'Active',
    startButtonText: 'Пауза',
    stopButtonText: 'Стоп',
    stopButtonIsDisabled: false,
    oppositeStatus: 'POMODORO_PAUSE_STATUS',
    nextStatus: 'BREAK_PAUSE_STATUS',
    initialSeconds: this.initialValuePomodro,
  };

  private POMODORO_PAUSE_STATUS: IStatus = {
    pomodoroStatus: 'Pomodoro',
    timerStatus: 'Pause',
    startButtonText: 'Продолжить',
    stopButtonText: 'Сделано',
    stopButtonIsDisabled: false,
    oppositeStatus: 'POMODORO_ACTIVE_STATUS',
    nextStatus: 'BREAK_PAUSE_STATUS',
    initialSeconds: this.initialValuePomodro,
  };

  private BREAK_ACTIVE_STATUS: IStatus = {
    pomodoroStatus: 'Break',
    timerStatus: 'Active',
    startButtonText: 'Пауза',
    stopButtonText: 'Пропустить',
    stopButtonIsDisabled: false,
    oppositeStatus: 'BREAK_PAUSE_STATUS',
    nextStatus: 'POMODORO_PAUSE_STATUS',
    initialSeconds: this.initialValueShortBreak,
  };

  private BREAK_PAUSE_STATUS: IStatus = {
    pomodoroStatus: 'Break',
    timerStatus: 'Pause',
    startButtonText: 'Продолжить',
    stopButtonText: 'Пропустить',
    stopButtonIsDisabled: false,
    oppositeStatus: 'BREAK_ACTIVE_STATUS',
    nextStatus: 'POMODORO_PAUSE_STATUS',
    initialSeconds: this.initialValueShortBreak,
  };

  // INITIAL_OVERALL_STATUS = {
  // pomodoroStatus: ;
  // timerStatus: ;

  // startButtonText: ;
  // stopButtonText: ;
  // stopButtonIsDisabled: ;
  // };

  status: IStatus = this.INITIAL_OVERALL_STATUS;

  // startButtonText: TStartButtonText = 'Старт';
  // stopButtonText: TStopButtonText = 'Стоп';
  // stopButtonIsDisabled: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  interval = () => {
    this.currentInterval = setInterval(() => {
      this.decrease(1);
    }, 1000);
  };

  increase(time: number) {
    if (this.secondsRemaining < 3498) {
      this.secondsRemaining += time;
    }
  }

  decrease = (time: number) => {
    if (this.secondsRemaining > 0) {
      this.secondsRemaining -= time;
    } else {
      this.stopTimer();
    }
  };

  reset = () => {
    this.secondsRemaining = this.initialValue;
  };

  startTimer = () => {
    // if(this.pomodoroStatus === '')

    if (!this.currentInterval) {
      this.interval();
      // this.status = this.POMODORO_ACTIVE_STATUS;
    } else {
      clearInterval(this.currentInterval);
      this.currentInterval = null;
    }
    this.status = this[this.status.oppositeStatus];
  };

  stopTimer = () => {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
    }
    if (this.pomodoroNumber === 4) {
      this.status = this[this.status.nextStatus];
    } else {
      this.status = this.INITIAL_OVERALL_STATUS;
    }
    this.secondsRemaining = this.status.initialSeconds;
    this.currentInterval = null;
  };

  isTimerStop = () => {
    // return this.status === 'STOP';
    return false;
  };
}

export const myTimerMobX = new Timer();
