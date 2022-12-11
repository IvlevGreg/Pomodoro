import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

// Model the application state.
// interface ITimer{
//   increase: () => void

// reset: () => void
// }

type TPomodoroStatus = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK' | 'NOT_START';
type TTimerStatus = 'ACTIVE' | 'PAUSE';

export class Timer {
  initialValue = 1500;
  initialValuePomodro = 1500;
  initialValueShortBreak = 300;
  initialValueLongBreak = 900;

  secondsRemaining = this.initialValue;
  currentInterval: NodeJS.Timer | null = null;
  pomodoroStatus: TPomodoroStatus = 'NOT_START';
  timerStatus: TTimerStatus = 'PAUSE';
  pomodoroNumber: 1 | 2 | 3 | 4 = 1;

  startButtonText: 'Старт' | 'Продолжить' | 'Пауза' = 'Старт';
  stopButtonText: 'Стоп' | 'Пропустить' | 'Сделано' = 'Стоп';
  stopButtonIsDisabled: boolean = true;

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
    if (!this.currentInterval) {
      this.interval();
      // this.status = 'START';
      this.startButtonText = 'Пауза';
      this.stopButtonIsDisabled = false;
    } else {
      clearInterval(this.currentInterval);
      this.currentInterval = null;
      this.startButtonText = 'Продолжить';
      this.stopButtonText = 'Сделано';
      this.stopButtonIsDisabled = false;
    }
  };

  stopTimer = () => {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
    }
    this.secondsRemaining = this.initialValue;
  };

  isTimerStop = () => {
    // return this.status === 'STOP';
    return false;
  };
}

export const myTimerMobX = new Timer();
