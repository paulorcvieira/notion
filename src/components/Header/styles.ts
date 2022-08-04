import styled from 'styled-components';

interface ButtonProps {
  underline?: string;
}

export const Container = styled.header`
  background: var(--gray-800);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;

  position: fixed;
  top: 0;
  min-width: 100%;

  box-shadow: 1px 1px 1px var(--green-500);
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;

  img {
    height: 4.6rem;
  }

  span, strong {
    line-height: 4.6rem;
    font-size: 2.6rem;
  }

  > span {
    margin-left: 0.5rem;
  }

  strong > span {
    color: var(--green-500);
  }
`

export const Navbar = styled.nav`
  ul {
    display: flex;
  }
`

export const Link = styled.span<ButtonProps>`
  position: relative;

  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  color: var(--white);

  margin-inline: 2rem;

  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    background: var(--white);
    height: 2px;
    width: ${({ underline }) => (underline === 'true' ? '100%' : 0)};
    left: 0;
    bottom: -10px;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;
