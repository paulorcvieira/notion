import styled, { DefaultTheme } from 'styled-components'

const statusVariants = {
  concluded: (theme: DefaultTheme) => theme.colors.green[200],
  inProgress: (theme: DefaultTheme) => theme.colors.blue[300],
  interrupted: (theme: DefaultTheme) => theme.colors.red[500],
}

interface StatusProps {
  variant: keyof typeof statusVariants
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
  padding: 5.6rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 3.2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 60rem;

    th {
      background-color: ${({ theme }) => theme.colors.gray[600]};
      padding: 1.6rem;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray[100]};
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    tr {
      background-color: ${({ theme }) => theme.colors.gray[700]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray[800]};
      }
    }

    td {
      border-top: 4px solid ${({ theme }) => theme.colors.gray[800]};
      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 2.4rem;
      }

      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ theme, variant }) => statusVariants[variant](theme)};
  }
`
