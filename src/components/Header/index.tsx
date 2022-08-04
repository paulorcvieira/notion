import { Container, Link, Logo, Navbar } from './styles';

import ActiveLink from 'components/ActiveLink';
import feedLogo from '../../../public/assets/feed-logo-48.svg';

interface HeaderProps {
  title: string;
}

export function Header({ title = "Home" }: HeaderProps) {
  return (
    <Container>
      <Logo>
        <img src={feedLogo} alt="FeedLogo" />
        <span>{title}</span>
        <strong>Not<span>i</span>on</strong>
      </Logo>

      <Navbar>
        <ul>
          <li>
            <ActiveLink href="/feed" passHref>
              <Link>FeedNotion</Link>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/todo" passHref>
              <Link>ToDoNotion</Link>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/test" passHref>
              <Link>EventNotion</Link>
            </ActiveLink>
          </li>
        </ul>
      </Navbar>
    </Container>
  );
}
