import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${({ theme }) => theme.colors.gray[100]};

  display: flex;
  gap: 1.6rem;

  span {
    background: ${({ theme }) => theme.colors.gray[700]};
    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 3.2rem 1.6rem;
  color: ${({ theme }) => theme.colors.purple[500]};

  width: 4.8rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
