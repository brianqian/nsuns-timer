import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MobileContainer = styled.nav`
  width: 100vw;
  height: 60px;
  border-top: 1px solid gray;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  section {
    width: 100%;
    height: 100%;
    flex: 1;
    font-size: 18px;
    line-height: 18px;
    padding: calc((60px - 18px) / 2);
    text-align: center;
    :hover {
      background-color: lightgray;
    }
  }
`;

const Container = styled.nav``;

function Nav() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) setIsMobileView(true);
  }, []);

  return (
    <MobileContainer>
      <section>HOME</section>
      <section>MAIN</section>
      <section>SETTINGS</section>
    </MobileContainer>
  );
}

export default Nav;
