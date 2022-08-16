import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  overflow: hidden;
`

export const Cover = styled.img`
  width: 100%;
  height: 13.2rem;
  object-fit: cover;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 8rem - 0.6rem);

  strong {
    font-size: 1.9rem;
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[100]};
    line-height: 1.6;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[400]};
    line-height: 1.6;
  }
`

export const Footer = styled.footer`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray[600]};
  margin-top: 2rem;
  padding: 2.4rem 3.2rem 3.2rem;

  a {
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.colors.green[500]};
    border: 0.1px solid ${({ theme }) => theme.colors.green[500]};
    border-radius: 8px;
    height: 5rem;
    padding: 0 2rem;
    font-weight: 700;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.6rem;

    transition: all 0.2s;
  }

  a:hover {
    background: ${({ theme }) => theme.colors.green[500]};
    color: ${({ theme }) => theme.colors.white};
  }
`
