import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MobileContainer = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: blue;
  position: fixed;
  bottom: 0;
`;

const Container = styled.nav``;

function Nav() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) setIsMobileView(true);
  }, []);

  return <MobileContainer>NAV BAR</MobileContainer>;
}

export default Nav;
