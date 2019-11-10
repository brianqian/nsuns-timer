import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Stopwatch from '../../components/Stopwatch/Stopwatch';
import DailyRoutineBar from '../../components/DailyRoutineBar/DailyRoutineBar';

interface Props {
  time: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  header {
    background-color: pink;
    width: 100%;
  }
`;

function Main({ time }: Props) {
  const [isRunning, setIsRunning] = useState(false);

  const toggleStopwatch = (): void => {
    setIsRunning(!isRunning);
  };

  return (
    <Container>
      <header>
        <h1>MONDAY</h1>
        <DailyRoutineBar />
      </header>
      <Stopwatch totalSeconds={time} isRunning={isRunning} toggle={toggleStopwatch} ms />
    </Container>
  );
}

export default Main;
