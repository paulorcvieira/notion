import Head from 'next/head'
import GithubCorner from 'react-github-corner'

import { Header } from 'components/Header'

import {
  Container,
  Content
} from 'styles/cron-notion.styles'


export default function CronNotion() {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/todo-logo.svg" />
        <link rel="apple-touch-icon" href="/assets/todo-logo.svg" />
        <title>CronNotion</title>
        <meta name="description" content="Your next generation feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cron" color="purple" logo="cron" />

      <Container>

        <Content>
          Cron
        </Content>

        <GithubCorner
          href="https://github.com/paulorcvieira"
          octoColor="#5e60ce"
          bannerColor="#29292e"
          size={86}
        />
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cron')
  const crons = await response.json()

  return {
    revalidate: 60 * 60 * 24,
    props: {
      crons
    }
  }
}
