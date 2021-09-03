import styled from "styled-components";

export const SectionTextTech = styled.p`
    max-width: 800px;
    font-size: 22px;
    line-height: 40px;
    font-weight: 500;
    padding-bottom: 36px;
    
`;

export const List = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    gap: 40px;
    margin: 3rem 0;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;

  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px;
    align-items: center;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  color: #5361FF;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  align-items: center;
}
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`;

export const ListContainer2 = styled.div`
    display: flex;
    max-width: 320px;
    color: ${props => props.theme.colors.primary1};

    @media ${props => props.theme.breakpoints.sm}{
    flex-direction: column;
    }

`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`;

export const ListSpan = styled.span`
    width: auto;
    font-size: 1.8rem;
    line-height: 30px;
    text-align: center;
    padding: .25rem .5rem;
    margin: 0 auto;
    background-color: white;
    border-radius: .25rem;

  &:hover {
      background-color: #5361FF;
      color: white;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListImg = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: .5rem;

`;