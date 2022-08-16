import styled from 'styled-components'

import { InputProps } from 'styles/cron.styles'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 1.8rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input<InputProps>`
  background: transparent;
  color: ${({ theme }) => theme.colors.gray[100]};
  height: 4rem;
  border: 0;
  border-bottom: 2px solid
    ${({ theme, error }) =>
      error ? theme.colors.red[500] : theme.colors.gray[500]};
  font-weight: bold;
  font-size: 1.8rem;
  padding: 0.8rem;

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid
      ${({ theme, error }) =>
        error ? theme.colors.red[500] : theme.colors.purple[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;
`
