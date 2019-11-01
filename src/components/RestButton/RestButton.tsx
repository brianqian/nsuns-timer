import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

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

const StyledClock = styled(Clock)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

function RestButton({ totalSeconds = 61 }) {
  const [timerRunning, setTimerRunning] = useState(false);

  const handleClick = () => {
    setTimerRunning(!timerRunning);
  };

  return (
    <Container>
      <Circle onClick={handleClick}>
        <StyledClock isRunning={timerRunning} totalSeconds={totalSeconds} />
      </Circle>
      <p>Status: {timerRunning ? 'running' : 'paused'}</p>
    </Container>
  );
}

export default RestButton;
