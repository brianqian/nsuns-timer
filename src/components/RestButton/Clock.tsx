import React, { useEffect, useState } from 'react';

interface P {
  isRunning: boolean;
  totalSeconds: number;
}

const Clock = ({ isRunning, totalSeconds }: P) => {
  const [_totalSeconds, setTotalSeconds] = useState(totalSeconds);
  const [displayTime, setDisplayTime] = useState('0:00');
  // const [startTime, setStartTime] = useState(new Date().getTime());

  useEffect(() => {
    console.log('USE EFFECT RUNNING', isRunning, _totalSeconds);
    setDisplayTime(formatSecondsToString(_totalSeconds));
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        console.log('tick');
        setTotalSeconds(_totalSeconds - 1);
        setDisplayTime(formatSecondsToString(_totalSeconds));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    function formatSecondsToString(totalSeconds: number) {
      let minutes: number | string = Math.floor(totalSeconds / 60);
      let seconds: number | string = totalSeconds % 60;
      if (minutes < 10) minutes = '0' + minutes;
      if (seconds < 10) seconds = '0' + seconds;
      return `${minutes}:${seconds}`;
    }
    // if (isRunning) {
    //   setStartTime(new Date().getTime());
    //   clearInterval(interval);
    // } else {
    //   interval = setInterval(() => {
    //     const currentTime = new Date().getTime();
    //     const elapsedTimeInSeconds = (currentTime - startTime) / 1000;
    //     setTotalSeconds(_totalSeconds - elapsedTimeInSeconds)
    //     setDisplayTime(formatSecondsToString(_totalSeconds))
    //   }, 1000);
    // }

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds, _totalSeconds]);

  return <div>{displayTime}</div>;
};

export default Clock;
