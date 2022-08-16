import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${({ theme }) => theme.colors.gray[900]};
`

export const VideoContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[950]};
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  > div {
    flex: 1;
    max-width: 1100px;
    max-height: 60vh;
    aspect-ratio: 16 / 9;
    background: ${({ theme }) => theme.colors.gray[800]};
  }
`

export const Class = styled.div`
  padding: 3.2rem;
  max-width: 1100px;
  margin-inline: auto;
  background: ${({ theme }) => theme.colors.gray[900]};
  flex: 1;
`

export const Description = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 6.4rem;
`

export const Instructor = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
  margin-top: 2.4rem;
`
export const Avatar = styled.div`
  width: 7rem;

  img {
    height: 6.4rem;
    width: 6.4rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.gray[700]};
    outline: 2px solid ${({ theme }) => theme.colors.blue[300]};
  }
`

export const Profile = styled.div`
  flex: 1;
  line-height: 1.625;

  strong {
    font-weight: 700;
    font-size: 1.9rem;
    display: block;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray[100]};
    display: block;
  }
`

export const Details = styled.div`
  flex: 1;

  h1 {
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-weight: 700;
  }

  p {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[100]};
    line-height: 1.625;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  a {
    padding: 1.6rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    gap: 0.8rem;

    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  a:first-child {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.green[500]};

    &:hover {
      background: ${({ theme }) => theme.colors.green[700]};
    }
  }

  a:last-child {
    color: ${({ theme }) => theme.colors.blue[300]};
    border: 1px solid ${({ theme }) => theme.colors.blue[300]};

    &:hover {
      color: ${({ theme }) => theme.colors.gray[900]};
      background: ${({ theme }) => theme.colors.blue[300]};
    }
  }
`

export const Materials = styled.div`
  margin-top: 8rem;
  gap: 3.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-template-columns: repeat(2, 1fr); */
`

export const Material = styled.a`
  text-decoration: none;
  background: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  gap: 2.4rem;

  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.gray[600]};
  }
`

export const MaterialLeft = styled.div`
  background: ${({ theme }) => theme.colors.green[700]};
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.green[300]};
  }
`

export const MaterialCenter = styled.div`
  padding-block: 1.6rem;
  line-height: 1.625;
  color: ${({ theme }) => theme.colors.gray[100]};
  text-decoration: none;

  strong {
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 2.4rem;
    line-height: 2.4;
    text-decoration: none;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[100]};
    font-size: 1.4rem;
    margin-top: 0.8rem;
    text-decoration: none;
  }
`

export const MaterialRight = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  flex: 1;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  padding-inline: 2.4rem;
  background: ${({ theme }) => theme.colors.gray[800]};

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`
