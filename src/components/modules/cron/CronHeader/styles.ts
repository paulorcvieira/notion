import styled from 'styled-components'

interface LinkProps {
  underline?: string
}

export const Container = styled.div<{ underline?: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  nav {
    display: flex;
    gap: 0.8rem;
  }
`

export const Link = styled.div<LinkProps>`
  width: 4.8rem;
  height: 4.8rem;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-bottom: 3px solid
    ${({ underline, theme }) =>
      underline === 'true' ? theme.colors.purple[500] : 'transparent'};

  color: ${({ underline, theme }) =>
    underline === 'true' ? theme.colors.purple[500] : theme.colors.gray[100]};

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.purple[500]};
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`
