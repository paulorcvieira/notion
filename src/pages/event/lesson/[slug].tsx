import dynamic from 'next/dynamic'
import GithubCorner from 'react-github-corner'

import DefaultLayout from 'components/layouts/DefaultLayout'

import { Container } from 'styles/event.styles'

const Event = dynamic(() => import('components/Event'), {
  ssr: false,
})

export default function LessonPage() {
  return (
    <DefaultLayout
      title="EventNotion"
      description="Your next generation Event"
      logoFileName="event-logo.svg"
      headerTitle="Event"
      headerColor="green"
      headerLogo="event"
      headerLogoAlt="Logo EventNotion"
    >
      <Container>
        <Event />

        <GithubCorner
          href="https://github.com/paulorcvieira"
          octoColor="#00875f"
          bannerColor="#29292e"
          size={86}
        />
      </Container>
    </DefaultLayout>
  )
}
