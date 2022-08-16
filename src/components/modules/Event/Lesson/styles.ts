import styled, { css } from 'styled-components'

export type StatusColor = 'live' | 'class'

interface Active {
  isActive: boolean
}

interface LessonAvailable extends Active {
  available: boolean
}

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;
`

export const LessonDate = styled.span`
  color: ${({ theme }) => theme.colors.gray[400]};
`

export const Box = styled.div<Active>`
  ${({ theme, isActive }) => css`
    border-radius: 8px;
    border: 1px solid ${isActive ? 'transparent' : theme.colors.gray[500]};
    padding: 1.6rem;
    margin-top: 0.8rem;
    background: ${isActive ? theme.colors.green[300] : 'transparent'};
    color: ${isActive ? theme.colors.white : ''};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:hover {
      border: 1px solid ${isActive ? 'transparent' : theme.colors.green[300]};
    }

    ${isActive &&
    css`
      &::before {
        content: ' ';
        background: ${theme.colors.green[300]};
        position: absolute;
        width: 1.6rem;
        height: 1.6rem;
        top: calc(50% + 0.8rem);
        left: -0.8rem;
        rotate: 45deg;
        border-radius: 2px;
      }
    `}
  `}
`

export const LessonTitle = styled.strong<Active>`
  display: block;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.gray[100]};
  margin-top: 2rem;
  line-height: 1.625;
  text-transform: capitalize;
`

export const LessonType = styled.span<LessonAvailable>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme, available, isActive }) =>
    isActive
      ? theme.colors.white
      : available
      ? theme.colors.blue[100]
      : theme.colors.yellow[500]};
  font-weight: 500;
`

export const Status = styled.span<Active>`
  ${({ theme, isActive }) => css`
    font-size: 1.2rem;
    line-height: 1.6rem;
    border-radius: 8px;
    padding-inline: 0.8rem;
    padding-block: 0.2rem;
    color: ${theme.colors.white};
    border: 1px solid ${isActive ? theme.colors.white : theme.colors.green[300]};
    font-weight: 700;
  `}
`
