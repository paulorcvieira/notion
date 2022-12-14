import styled from 'styled-components'

export const Container = styled.div`
  width: 73.6rem;
  margin: 17.3rem auto 2rem auto;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const NewTask = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    height: 5.4rem;
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[500]};
    outline: transparent;
    font-size: 1.6rem;
    flex: 1;
    padding: 1.6rem;

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[700]};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.4rem;
    width: 9rem;
    margin-left: 0.8rem;

    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.blue[700]};

    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 16;

    cursor: pointer;
    transition: background 0.2s;

    svg {
      margin-left: 0.8rem;
    }

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[700]};
    }

    transition: background 0.2s;

    text-decoration: none;
    overflow: hidden;

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.blue[300]};
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  width: 73.6rem;
  height: 28.7rem;
  margin-top: 6.4rem;
`

export const TaskHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  font-size: 1.4rem;
  font-weight: 700;

  span {
    margin-left: 0.8rem;
    background: ${({ theme }) => theme.colors.gray[400]};
    border-radius: 15px;
    padding: 0.3rem 1rem;
  }
`

export const TasksContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TasksEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[400]};

  img {
    margin-bottom: 1.6rem;
  }

  strong,
  span {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`
