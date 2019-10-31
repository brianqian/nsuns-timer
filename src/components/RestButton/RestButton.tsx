import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 40%;
  width: 40%;
  border: 1px solid black;
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border: 8px solid red;
  border-radius: 100px;
  position: relative;
`;

const Clock = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
`;

function RestButton({ totalSeconds = 120 }) {
  const [_totalSeconds, setTotalSeconds] = useState(totalSeconds);
  const [time, setTime] = useState('0:00:00');
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    // console.log('USE EFFECT RUNNING');
    setTime(formatSeconds(_totalSeconds));
  }, [totalSeconds]);

  const formatSeconds = (inputSeconds: number) => {
    let minutes: number | string = Math.floor(inputSeconds / 60);
    let seconds: number | string = inputSeconds % 60;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
  };

  const handleClick = () => {
    const time = new Date().getTime();
    console.log(time);
  };

  return (
    <Container>
      <Circle onClick={handleClick}>
        <Clock>{time}</Clock>
      </Circle>
      <p>Status: {timerRunning ? 'running' : 'paused'}</p>
    </Container>
  );
}

export default RestButton;
