import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.5rem 2rem;
  header {
    min-width: 1000px;
  }
`;

function Home() {
  return <Container>HOME PAGE</Container>;
}

export default Home;
