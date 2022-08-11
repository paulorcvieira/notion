import dynamic from 'next/dynamic'
import GithubCorner from 'react-github-corner'

import { CronHeader } from 'components/cron'

import DefaultLayout from 'components/layouts/DefaultLayout'

import { Container } from 'styles/cron-history.styles'

const HistoryList = dynamic(() => import('components/cron/HistoryList'), {
  ssr: false,
})

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
