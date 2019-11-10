import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: blue;
`;

function Nav() {
  return <Container>NAV BAR</Container>;
}

export default Nav;
