import Link from 'next/link';
import React from 'react';
import MobileNavigation from './MobileNav';
import NavigationMenu from './Navigation';

import { Container, Div0, Div1, Span } from './HeaderStyles';

const Header = () => (
  <Div0>
    <Container>

      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', }}><Span>Jonathan Magalhaes</Span></a>
        </Link>
      </Div1>
      <div>
        <NavigationMenu />
        <MobileNavigation />
      </div>

    </Container>
  </Div0>
);

export default Header;
