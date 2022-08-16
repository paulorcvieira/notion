import styled, { DefaultTheme } from 'styled-components'

interface ButtonProps {
  underline?: string
}

export type ColorVariant = 'green' | 'blue' | 'purple'

interface ColorProps {
  color: ColorVariant
}

const logoColor = {
  green: (theme: DefaultTheme) => theme.colors.green[500],
  blue: (theme: DefaultTheme) => theme.colors.blue[700],
  purple: (theme: DefaultTheme) => theme.colors.purple[500],
}

export const Container = styled.header<ColorProps>`
  background: var(--gray-800);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  z-index: 1;

  position: fixed;
  top: 0;
  min-width: 100%;

  box-shadow: 1px 1px 1px ${({ theme, color }) => logoColor[color](theme)};
`

export const Logo = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;

  img {
    width: 4.6rem;
    height: 4.6rem;
  }

  span,
  strong {
    line-height: 4.6rem;
    font-size: 2.6rem;
  }

  > span {
    margin-left: 0.5rem;
  }

  strong > span {
    color: ${({ theme, color }) => logoColor[color](theme)};
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
`
