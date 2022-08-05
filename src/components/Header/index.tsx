import { ColorVariant, Container, Link, Logo, Navbar } from './styles';

import ActiveLink from 'components/ActiveLink';

import cronLogo from '../../../public/assets/cron-logo.svg';
import feedLogo from '../../../public/assets/feed-logo-48.svg';
import todoLogo from '../../../public/assets/todo-logo.svg';

interface HeaderProps {
  title: string;
  color?: ColorVariant;
  logo?: 'feed' | 'todo' | 'cron';
}

export function Header({
  title = 'Home',
  color = 'green',
  logo = 'feed'
}: HeaderProps) {
  return (
    <Container color={color}>
      <Logo color={color}>
        {logo === 'feed'
        ? (<img src={feedLogo} alt="FeedLogo" />)
        : logo === 'todo'
          ? (<img src={todoLogo} alt="FeedLogo" />)
          : (<img src={cronLogo} alt="FeedLogo" />)
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
            <ActiveLink href="/cron" passHref>
              <Link>CronNotion</Link>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/event" passHref>
              <Link>EventNotion</Link>
            </ActiveLink>
          </li>
        </ul>
      </Navbar>
    </Container>
  );
}
