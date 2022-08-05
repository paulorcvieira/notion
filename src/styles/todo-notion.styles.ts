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
    background: var(--gray-600);
    color: var(--gray-200);
    outline: transparent;
    font-size: 1.6rem;
    flex: 1;
    padding: 1.6rem;

    &:focus {
      box-shadow: 0 0 0 2px var(--blue-700);
      color: var(--white);
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.4rem;
    width: 9rem;
    margin-left: .8rem;

    border: 0;
    border-radius: 8px;
    background: var(--blue-700);

    color: var(--white);
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 16;

    cursor: pointer;
    transition: background 0.2s;

    svg {
      margin-left: 0.8rem;
    }

    &:focus {
      box-shadow: 0 0 0 2px var(--blue-700);
    }

    transition: background 0.2s;

    text-decoration: none;
    overflow: hidden;

    &:not(:disabled):hover {
      background: var(--blue-300);
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
    background: var(--gray-600);
    border-radius: 15px;
    padding: .3rem 1rem;
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
  border-top: 1px solid var(--gray-600);

  img {
    margin-bottom: 1.6rem;
  }

  strong, span {
    color: var(--gray-200);
  }
`
