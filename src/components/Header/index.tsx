import { ColorVariant, Container, Link, Logo, Navbar } from './styles'

import ActiveLink from 'components/ActiveLink'

import cronLogo from '../../../public/assets/cron-logo.svg'
import eventLogo from '../../../public/assets/event-logo.svg'
import feedLogo from '../../../public/assets/feed-logo.svg'
import todoLogo from '../../../public/assets/todo-logo.svg'

export type LogoVariant = 'feed' | 'todo' | 'cron' | 'event'

interface HeaderProps {
  title: string
  color?: ColorVariant
  logo?: LogoVariant
  logoAlt?: string
}

export function Header({
  title = 'Home',
  color = 'green',
  logo = 'feed',
  logoAlt = 'Logo',
}: HeaderProps) {
  return (
    <Container color={color}>
      <Logo color={color}>
        {logo === 'feed' ? (
          <img src={feedLogo} alt={logoAlt} />
        ) : logo === 'todo' ? (
          <img src={todoLogo} alt={logoAlt} />
        ) : logo === 'event' ? (
          <img src={eventLogo} alt={logoAlt} />
        ) : (
          <img src={cronLogo} alt={logoAlt} />
        )}
        <span>{title}</span>
        <strong>
          Not<span>i</span>on
        </strong>
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
  )
}
