import styled from "styled-components";

export const Div0 = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  background: ${props => props.theme.colors.background2};
`;
export const Container = styled.div`
  width: 1040px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  margin: 0 auto;
  padding: ${(props) => props.nopadding ? "0" : "32px 0 32px" } ;
  
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0 5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;
export const Div1 = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {

  }
`;
export const Div2 = styled.ul`
    display: flex;
    align-items: center;
    gap: 6rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6rem;
    right: 0;
    width: 100vw;
    height: 100vh;
    padding: 3rem;
    background: ${props => props.theme.colors.background2};
    border-top: 2px solid #FFFFFF;
  }
`;

export const Div3 = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
  }

`;

//Navigation Links
export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 32px;
  color: white;
  transition: 0.4s ease;
  position: relative;
  &:hover {
    transform: scale(5);
    cursor: pointer;
  }
  &:after {
    content: "";
    width: 0%;
    height: 2px;
    background: #FFFFFF;
    position: absolute;
    left: 0;
    bottom: -1.5rem;
    transition: width .2s;
  }
  &:hover:after {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

//Social Icons
export const SocialIcons = styled.a `
transition: 0.3s ease;
color: white;
border-radius: 50px;

&:hover {
    transform: scale(1.2);
    cursor: pointer;
}
`;

//Mobile Navigation
export const MobileNav = styled.nav`
  display: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    align-items: center;
    
  }
`;
//Navigation
export const  Navigation = styled.nav`
  
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
    
  }
  
`;