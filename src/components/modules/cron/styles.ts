import styled from 'styled-components'

export interface InputProps {
  error?: boolean
}

export const Container = styled.div`
  height: calc(100vh - 15rem);
  max-width: 118.4rem;
  margin: 10rem auto 2rem;
  padding: 2.5rem;
  flex: 1;

  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  overflow: scroll;
  scrollbar-width: none;
`

export const Content = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`

const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1.6rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.gray[100]};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.purple[500]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.purple[600]};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.red[500]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.red[700]};
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 86px;
  margin-top: 2.4rem;
`

export const ErrorBox = styled.div<InputProps>`
  display: ${({ error }) => (error ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.red[500]};
  background: ${({ theme }) => theme.colors.gray[700]};
  padding: 1.6rem;
  border-radius: 8px;
`
