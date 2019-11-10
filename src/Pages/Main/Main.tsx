import React from 'react';
import styled from 'styled-components/macro';
import Stopwatch from '../../components/Stopwatch/Stopwatch';
import DailyRoutineBar from '../../components/DailyRoutineBar/DailyRoutineBar';

const Container = styled.div``;

function Main() {
  return (
    <Container>
      <header>
        <h1>MONDAY</h1>
        <DailyRoutineBar />
      </header>
      <Stopwatch />
    </Container>
  );
}

export default Main;
