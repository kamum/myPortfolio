import NavLinks from "./NavLinks";
import React from 'react';
import { Navigation } from "./HeaderStyles";

const NavigationMenu = () => {
    return(
        <Navigation>
            <NavLinks />
        </Navigation>
    );
}

export default NavigationMenu;