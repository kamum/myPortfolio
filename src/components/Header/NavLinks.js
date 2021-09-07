import Link from 'next/link';
import React from 'react';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const NavLinks = (props) => {
    return (
        <>
            <Div2>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="#home">
                        <NavLink>Home</NavLink>
                    </Link>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="#tech">
                        <NavLink>Skills</NavLink>
                    </Link>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="#about">
                        <NavLink>About</NavLink>
                    </Link>
                </li>
                <Div3>
                <SocialIcons href="https://github.com/kamum">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://linkedin.com">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://intagram.com">
                    <AiFillInstagram size="3rem" />
                </SocialIcons>
            </Div3>
            </Div2>
            
        </>
    );
}

export default NavLinks;