import styled from 'styled-components'

export const Container = styled.div`
  max-width: 112rem;
  margin: 10rem auto 2rem auto;
  padding: 0 1.6rem;

  display: grid;
  grid-template-columns: 25.6rem 1fr;
  gap: 3.2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
