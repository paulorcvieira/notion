import styled from 'styled-components'

export interface InputProps {
  error?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url('/assets/event/blur-background.png') no-repeat center;
  background-size: cover;
  align-items: center;
  margin-top: 8rem;
  height: calc(100vh - 8rem);
`

export const Content = styled.div`
  max-width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 39rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 8rem;
  gap: 4rem;
  padding: 2.4rem;

  &::before {
    content: '';
    background: url('/assets/event/cover-event.png') no-repeat center;
    background-size: cover;
    position: absolute;
    top: 9rem;
    right: 9rem;
    bottom: 6rem;
    left: 9rem;
    opacity: 0.3;
    z-index: -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Description = styled.div`
  max-width: 64rem;

  h1 {
    margin-top: 3.2rem;
    font-size: 4rem;
    line-height: 1.625;

    strong {
      color: ${({ theme }) => theme.colors.blue[300]};
    }
  }

  p {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[300]};
    line-height: 1.625;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  min-height: 35rem;
  width: 100%;

  strong {
    font-size: 2.5rem;
    margin-bottom: 2.4rem;
    display: block;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Input = styled.input<InputProps>`
  background: ${({ theme }) => theme.colors.gray[950]};
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  padding-inline: 2rem;
  height: 5.6rem;

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid
      ${({ theme, error }) =>
        error ? theme.colors.red[500] : theme.colors.green[300]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const Button = styled.button`
  margin-top: 2.4rem;
  background: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding-block: 1.6rem;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  height: 100%;
  cursor: pointer;

  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.green[300]};
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  width: 100vw;
  padding-inline: 2.4rem;
  background: ${({ theme }) => theme.colors.gray[800]};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    svg {
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`

export const ErrorBox = styled.div<InputProps>`
  display: ${({ error }) => (error ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.red[500]};
  padding-inline: 1.6rem;
  border-radius: 8px;
  margin-bottom: 0.8rem;
`
