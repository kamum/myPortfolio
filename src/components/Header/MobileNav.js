import NavLinks from "./NavLinks";
import React from 'react';
import {CgMenu} from 'react-icons/cg';
import { CgClose } from "react-icons/cg";

import { MobileNav } from "./HeaderStyles";
import { useState } from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);
    const openHamburgerIcon = <CgMenu  
        style={{color: 'white', fontSize: "3rem", position: 'absolute', right: '2rem', cursor: 'pointer'}}
        onClick={() => setOpen(!open)}
    />
    const closeHamburgerIcon = <CgClose  
        style={{color: 'white', fontSize: "3rem", position: 'absolute', right: '2rem', cursor: 'pointer'}}
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);

    return(
        <MobileNav>
            {open ? closeHamburgerIcon : openHamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </MobileNav>
    );
}

export default MobileNavigation;