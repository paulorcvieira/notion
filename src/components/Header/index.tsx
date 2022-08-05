import { Container, Link, Logo, Navbar } from './styles';

import ActiveLink from 'components/ActiveLink';
import feedLogo from '../../../public/assets/feed-logo-48.svg';
import todoLogo from '../../../public/assets/todo-logo.svg';

interface HeaderProps {
  title: string;
  color?: 'green' | 'blue';
  logo?: 'feed' | 'todo';
}

export function Header({
  title = 'Home',
  color = 'green',
  logo = 'feed'
}: HeaderProps) {
  return (
    <Container color={color}>
      <Logo color={color}>
        {logo === 'feed' ? (
            <img src={feedLogo} alt="FeedLogo" />
          ) : (
            <img src={todoLogo} alt="FeedLogo" />
          )
        }
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
