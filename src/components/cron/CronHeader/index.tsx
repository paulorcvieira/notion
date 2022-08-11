import { Scroll, Timer } from 'phosphor-react'

import ActiveLink from 'components/ActiveLink'

import { Container, Link } from './styles'

export function CronHeader() {
  return (
    <Container>
      <nav>
        <ActiveLink href="/cron" passHref shouldMatchExactHref>
          <Link title="Histórico">
            <Timer size={24} />
          </Link>
        </ActiveLink>
        <ActiveLink href="/cron-history" passHref shouldMatchExactHref>
          <Link title="Histórico">
            <Scroll size={24} />
          </Link>
        </ActiveLink>
      </nav>
    </Container>
  )
}
