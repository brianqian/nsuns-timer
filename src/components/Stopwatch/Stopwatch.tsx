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
  const [msRemaining, dispatch] = useReducer(reducer, totalSeconds * 1000);

  function reducer(state: number, action: any) {
    if (action.type === 'tick') {
      return state - 100;
    }
    return state;
  }

  useEffect(() => {
    console.log('useeffect firing');
    console.log(msRemaining);
    let interval: any;
    if (isRunning && msRemaining > 0) {
      interval = setInterval(() => {
        console.log('tick');
        dispatch({ type: 'tick' });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [dispatch, isRunning]);

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
    const finalString = `${minutes}:${seconds}:${hs}`;
    console.log('TCL: formatSeconds -> finalString', initialMs, finalString);
    return finalString;
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
