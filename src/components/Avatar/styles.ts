import styled, { css } from 'styled-components';

interface AvatarProps {
  hasBorder?: boolean;
  small?: boolean
}

export const AvatarImg = styled.img<AvatarProps>`
  ${({ small, hasBorder }) => css`
    width: ${small ? 'calc(4rem + 10px)' : 'calc(13rem + 16px)'};
    height: ${small ? 'calc(4rem + 10px)' : 'calc(13rem + 16px)'};
    border-radius: 8px;

    ${hasBorder && css`
      border: ${small ? '3px solid var(--gray-800)' : '6px solid var(--gray-800)'};
      outline: 2px solid var(--green-500);
    `};
  `}
`
