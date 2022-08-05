import styled from 'styled-components'

interface TaskProps {
  isComplete: boolean
}

export const Container =  styled.div<TaskProps>`
  display: grid;
  width: 100%;
  grid-template-columns: 5.6rem 1fr 5.6rem;
  gap: 1.2rem;
  padding: 1.6rem;
  background: var(--gray-600);
  border-radius: 8px;

  & + div {
    margin-top: 1.2rem;
  }

  div:first-child {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      line-height: 0;
      border-radius: 4px;

      &:focus {
        box-shadow: 0 0 0 2px var(--blue-700);
      }
    }
  }

  div:nth-child(2) {
    cursor: pointer;

    span {
      text-decoration: ${({ isComplete }) => isComplete ? 'line-through' : 'none'};
    }
  }

  div:last-child {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    button {
      background: transparent;
      border: 0;
      color: var(--gray-400);
      cursor: pointer;
      line-height: 0;
      border-radius: 4px;

      &:focus {
        box-shadow: 0 0 0 2px var(--blue-700);
      }

      &:hover {
        color: var(--red-500);
      }
    }

  }
`
