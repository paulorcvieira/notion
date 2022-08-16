import styled from 'styled-components'

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 4rem;

  & + & {
    margin-top: 3.2rem;
  }
`

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  div {
    strong {
      display: block;
      color: ${({ theme }) => theme.colors.gray[100]};
      line-height: 1.6;
    }

    span {
      display: block;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray[400]};
      line-height: 1.6;
    }
  }
`

export const Content = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: 2.4rem;

  p {
    margin-top: 1.6rem;
    text-align: justify;
  }

  p * + a {
    margin-left: 0.6rem;
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green[500]};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.green[300]};
  }
`

export const FormComment = styled.form`
  width: 100%;
  margin-top: 2.4rem;
  padding-top: 2.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[600]};

  > strong {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  textarea {
    width: 100%;
    background: ${({ theme }) => theme.colors.gray[900]};
    border: 0;
    resize: none;
    height: 9.6rem;
    padding: 1.6rem;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.gray[100]};
    line-height: 1.4;
    margin-top: 1.6rem;
  }

  textarea:focus {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.green[500]};
  }

  footer {
    visibility: hidden;
    max-height: 0;
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-within footer {
    visibility: visible;
    max-height: none;
  }
`

export const FormButton = styled.button`
  position: relative;
  padding: 1.6rem 2.4rem;
  margin-top: 1.6rem;
  border-radius: 8px;
  border: 0;
  background: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;

  transition: background 0.2s;

  text-decoration: none;
  overflow: hidden;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.green[300]};
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray[900]};
    border-radius: 100%;
    padding-top: 300%;
    padding-left: 200%;
    margin-left: -30px !important;
    margin-top: -130%;
    opacity: 0;

    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`

export const Comments = styled.div`
  margin-top: 3.2rem;
`
