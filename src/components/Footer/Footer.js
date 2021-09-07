import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {SiNextDotJs} from 'react-icons/si'

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <div style={{background: '#5361FF'}}>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel: +550219830-75474">
              +550219830-75474
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="jonathanmundi@gmail.com">
              jonathanmundi@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Created with <SiNextDotJs/> Next.js</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/kamum">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://intagram.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
