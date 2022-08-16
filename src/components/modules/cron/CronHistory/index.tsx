import GithubCorner from 'react-github-corner'

import { CronHeader } from '../CronHeader'
import HistoryList from '../HistoryList'

import DefaultLayout from 'components/communs/layouts/DefaultLayout'

import { Container } from './styles'

export default function CronHistory() {
  return (
    <DefaultLayout
      title="CronNotion - History"
      description="Your next generation Cron"
      logoFileName="cron-logo.svg"
      headerTitle="Cron"
      headerColor="purple"
      headerLogo="cron"
      headerLogoAlt="Logo CronNotion"
    >
      <Container>
        <CronHeader />

        <HistoryList />

        <GithubCorner
          href="https://github.com/paulorcvieira"
          octoColor="#5e60ce"
          bannerColor="#29292e"
          size={86}
        />
      </Container>
    </DefaultLayout>
  )
}
