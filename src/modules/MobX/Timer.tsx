import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

// Model the application state.
// interface ITimer{
//   increase: () => void

// reset: () => void
// }

export class Timer {
  initialValue = 1500;
  secondsRemaining = this.initialValue;
  currentInterval: NodeJS.Timer | null = null;
  status: 'START' | 'STOP' = 'STOP';

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
      this.status = 'START';
    }
  };

  stopTimer = () => {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = null;
      this.status = 'STOP';
    }
  };

  isTimerStart = () => {
    return this.status === 'START';
  };

  isTimerStop = () => {
    return this.status === 'STOP';
  };
}

export const myTimerMobX = new Timer();
