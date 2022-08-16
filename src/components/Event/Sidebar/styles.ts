import styled from 'styled-components'

export const Container = styled.aside`
  max-width: 34.8rem;
  background: ${({ theme }) => theme.colors.gray[800]};
  padding: 2.4rem;
  border-left: 1px solid ${({ theme }) => theme.colors.gray[500]};
  flex: 1;
`

export const Title = styled.span`
  display: block;
  font-weight: 700;
  font-size: 2.4rem;
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
`

export const Lessons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
