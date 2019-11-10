import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../Main/Main';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { theme } from '../../utils/cssTheme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway|Cabin&display=swap');
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
  display: flex;
  flex-direction: column;
`;

const tempDatabase = {
  defaultLength: 60,
};

function App() {
  // UserSettings state should be stored in...
  // 1. Local Storage vs Cookies?
  // 2. Database?
  // (3.) Then loaded into Context?
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Main time={tempDatabase.defaultLength} />
        <Nav />
      </Container>
    </ThemeProvider>
  );
}

export default App;
