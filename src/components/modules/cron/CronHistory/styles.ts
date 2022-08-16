import styled from 'styled-components'

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
