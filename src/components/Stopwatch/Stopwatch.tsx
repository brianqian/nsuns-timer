import React, { useState, useEffect } from 'react';
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

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border: 8px solid red;
  border-radius: 100px;
  position: relative;
  p {
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    padding: 91px 0;
    position: absolute;
    width: 100%;
  }
`;

function Stopwatch({ totalSeconds = 60, isRunning, toggle, ms }: Props) {
  // This is the outside container that handles layout and controls the state of total seconds
  // StyledClock should be responsible for rendering the state.
  // Pause/play should be handled by parent since playstate affects spotify controls (future)
  //

  const [actualSeconds, setActualSeconds] = useState(totalSeconds);

  useEffect(() => {
    let interval: any;
    if (isRunning && actualSeconds > 0) {
      interval = setInterval(() => {
        setActualSeconds(actualSeconds - 1);
      }, 1000);
    }
    console.log(interval);
    return () => clearInterval(interval);
  }, [isRunning, actualSeconds]);

  const formatSeconds = (initialSeconds: number) => {
    let minutes: number | string = Math.floor(initialSeconds / 60);
    let seconds: number | string = initialSeconds % 60;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
  };

  return (
    <Container onClick={toggle}>
      <CircularProgressbar
        value={1 - actualSeconds / totalSeconds}
        maxValue={1}
        text={formatSeconds(actualSeconds)}
      />
      {/* <Circle onClick={toggle}>
        <p>{formatSeconds(actualSeconds)}</p>
      </Circle> */}
      <p>Status: {isRunning ? 'running' : 'paused'}</p>
    </Container>
  );
}

export default Stopwatch;
