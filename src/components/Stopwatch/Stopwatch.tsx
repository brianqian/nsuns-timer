import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components/macro';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
  totalSeconds: number;
  isRunning: boolean;
  ms?: boolean;
  toggle: () => void;
}

const Container = styled.div`
  height: 400px;
  width: 400px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Stopwatch({ totalSeconds = 60, isRunning, toggle }: Props) {
  // This is the outside container that handles layout and controls the state of total seconds
  // Pause/play should be handled by parent since playstate affects spotify controls (future)
  //

  const [initialTime, setInitialTime] = useState(0);
  const [msRemaining, setMsRemaining] = useState(totalSeconds * 1000);

  useEffect(() => {
    let interval: any;
    setInitialTime(new Date().getTime());
    if (isRunning && msRemaining > 0) {
      interval = setInterval(() => {
        const elapsedMs = new Date().getTime() - initialTime;
        setMsRemaining(msRemaining - elapsedMs);
      }, 89);
    }
    return () => clearInterval(interval);
  }, [isRunning, msRemaining]);

  const formatSeconds = (initialMs: number) => {
    const minuteLength = 1000 * 60;
    const secondLength = 1000;
    let minutes: number | string = Math.floor(initialMs / minuteLength);
    let seconds: number | string = Math.floor((initialMs - minutes * minuteLength) / secondLength);
    let hs: number | string = (
      (initialMs - minutes * minuteLength - seconds * secondLength) /
      10
    ).toFixed(0);

    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    // if (hs < 0) hs = '0' + hs;
    return `${minutes}:${seconds}:${hs}`;
  };

  return (
    <Container onClick={toggle}>
      <CircularProgressbar
        value={1 - msRemaining / (totalSeconds * 1000)}
        maxValue={1}
        text={formatSeconds(msRemaining)}
      />
      <p>Status: {isRunning ? 'running' : 'paused'}</p>
    </Container>
  );
}

export default Stopwatch;
