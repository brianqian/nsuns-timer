import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div``;

interface P {
  isRunning: boolean;
  totalSeconds: number;
  className?: string;
}

const Clock = ({ isRunning, totalSeconds, className }: P) => {
  const [_totalSeconds, setTotalSeconds] = useState(totalSeconds);
  const [displayTime, setDisplayTime] = useState('0:00');
  // const [startTime, setStartTime] = useState(new Date().getTime());

  useEffect(() => {
    console.log('USE EFFECT RUNNING', isRunning, _totalSeconds);
    setDisplayTime(formatSecondsToString(_totalSeconds));
    let interval: any;
    if (isRunning && _totalSeconds > 0) {
      interval = setInterval(() => {
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

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds, _totalSeconds]);

  return <Container className={className}>{displayTime}</Container>;
};

export default Clock;
