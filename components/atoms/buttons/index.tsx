import { LinkProps } from 'next/link';
import styled from 'styled-components';
import type { ButtonProps } from './types';

// Guard to check if href exists in props
export const hasHref = (props: ButtonProps | LinkProps): props is LinkProps =>
  'href' in props;

// const ButtonComponent: Overload = (props: ButtonProps | LinkProps) => {
//   return hasHref(props) ? (
//     // @ts-expect-error
//     <Link {...props}>{props.children}</Link>
//   ) : (
//     <button {...props}>{props.children}</button>
//   );
// };

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--b-radius);
  outline: none;
  background-color: transparent;
  font: inherit;
  letter-spacing: var(--spacing);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: var(--transition, all 0.2s ease);

  &:hover,
  &:focus-visible {
    outline: none;
  }
`;

type StyledProps = {
  kind: 'primary' | 'secondary';
};

const StyledButton = styled(Button)`
  font-size: var(--fs-button);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
`;
const ProductButton = styled(StyledButton)`
  padding-block: 1.43rem;
  padding-inline: 3.8rem;
`;

//  MOBILE TOGGLE
export const MenuButton = styled(Button)`
  & > img {
    width: 2.2rem;
    aspect-ratio: 1;
  }
`;

export const BackButton = styled(Button)``;

export const ButtonPrimary = styled(ProductButton)`
  color: var(--clr-neutral-100);
  background-color: var(--clr-primary-100);

  &:hover,
  &:focus-visible {
    background-color: var(--clr-primary-200);
  }
`;

export const ButtonSecondary = styled(ProductButton)`
  border: 1px solid var(--clr-neutral-900);
  color: var(--clr-neutral-900);
  background-color: var(--clr-neutral-100);

  &:hover,
  &:focus-visible {
    color: var(--clr-neutral-100);
    background-color: var(--clr-neutral-900);
  }
`;

export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  color: hsl(var(--clr-700) / 0.5);
  background-color: var(--clr-neutral-100);
  font-size: var(--fs-button);
  font-weight: var(--fw-bold);
  text-transform: uppercase;

  &:hover,
  &:focus-visible {
    color: var(--clr-primary-100);
    background-color: inherit;
  }

  & > img {
    margin-inline-start: 1rem;
  }
`;
export const BtnControl = styled(Button)``;

export const CartIcon = styled(Button)``;

// <!-- MOBILE TOGGLE -->
// <button
//   class="btn--mobile-toggle"
//   aria-controls="primary-navigation"
//   aria-expanded="false"
// >
//   <span class="sr-only">Menu</span>
// </button>
