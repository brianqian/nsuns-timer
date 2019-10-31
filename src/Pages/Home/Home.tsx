import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../../utils/cssTheme';
import DailyRoutineBar from '../../components/DailyRoutineBar/DailyRoutineBar';
import RestButton from '../../components/RestButton/RestButton';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway|Cabin|Cormorant+Garamond&display=swap');
body, html{
  font-family: 'Cabin';
  max-width: 100vw;
  min-height: 100vh;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: black;
    :visited {
      color:  black;
    }
}
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <h1>MONDAY</h1>
        <DailyRoutineBar />
        <RestButton></RestButton>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
