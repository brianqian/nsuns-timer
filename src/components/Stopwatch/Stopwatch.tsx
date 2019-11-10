import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Clock from './Clock';

const Container = styled.div`
  height: 100%;
  width: 100%;
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
`;

const StyledClock = styled(Clock)`
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  padding: 91px 0;
  position: absolute;
  width: 100%;
`;

function Stopwatch({ totalSeconds = 61 }) {
  //This is the outside container that handles layout and controls the state of total seconds
  // StyledClock should be responsible for rendering the state.
  // Pause/play should be handled by parent since playstate affects spotify controls (future)
  //
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

export default Stopwatch;
