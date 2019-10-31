import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: 40px 40px;
  div {
    border: 1px solid black;
  }
`;

function DailyRoutineBar() {
  return (
    <Container>
      <div>t1</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>t2</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
      <div>filler</div>
    </Container>
  );
}

export default DailyRoutineBar;
