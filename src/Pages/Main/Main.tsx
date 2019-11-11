import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Stopwatch from '../../components/Stopwatch/Stopwatch';
import DailyRoutineBar from '../../components/DailyRoutineBar/DailyRoutineBar';
import { DailySplitVariation } from '../../data/presetLiftValues';

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

const tempDailyRoutine = {
  variationName: '',
};

function Main({ time }: Props) {
  const [isRunning, setIsRunning] = useState(false);

  const toggleStopwatch = (): void => {
    setIsRunning(!isRunning);
  };

  const myLifts = new DailySplitVariation('5day', 5);

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
