import { CartIcon, Logo } from 'components/atoms';
import { GlobalContainer } from 'components/templates';
import styled from 'styled-components';

interface ContainerProps {
  isHome: boolean;
}

export const HeaderContainer = styled(GlobalContainer)<ContainerProps>`
  --text-color: var(--clr-neutral-100);
  --bg-color: ${(props) =>
    props.isHome ? `var(--clr-neutral-800)` : `var(--clr-neutral-900)`};

  position: sticky;
  top: 0;
  padding-block: 2em;
  color: var(--text-color);
  background-color: var(--bg-color);
  box-shadow: 0 0 0 100vmax var(--bg-color), 0 0 2rem var(--bg-color);
  clip-path: inset(0 -100vmax);
`;

export const HeaderStack = styled.div`
  @media (min-width: 65em) {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const HeaderLogo = styled(Logo)`
  @media (min-width: 65em) {
  }
`;

export const HeaderNavigation = styled.nav`
  @media (min-width: 65em) {
    margin-inline: auto;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const HeaderCartIcon = styled(CartIcon)`
  margin-inline-start: auto;
  /* @media (min-width: 65em) {
  } */
`;
