import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 2.4rem;

  img {
    margin-top: 1.8rem;
  }
`

export const Box = styled.div`
  flex: 1;
`

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 1.6rem;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.gray[400]};
    cursor: pointer;
    line-height: 0;
    border-radius: 4px;
  }

  button:hover {
    color: ${({ theme }) => theme.colors.red[500]};
  }
`

export const HeaderContent = styled.div`
  strong {
    display: block;
    font-size: 1.4rem;
    line-height: 1.6;
  }

  time {
    display: block;
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`

export const CommentContent = styled.div`
  p {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`

export const Clap = styled.footer`
  display: flex;
  justify-content: row;
  margin-top: 1.6rem;

  line-height: 1.4;
  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors.yellow[600]};

  button {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.yellow[600]};
    cursor: pointer;

    display: flex;
    align-items: center;

    border-radius: 2px;
  }

  button:hover {
    color: ${({ theme }) => theme.colors.yellow[500]};
  }

  svg {
    margin-right: 0.8rem;
  }

  span {
    font-size: 1.4rem;

    &::before {
      content: '\u2219';
      padding: 0 0.5rem;
    }
  }
`
