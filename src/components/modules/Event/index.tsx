import { useRouter } from 'next/router'
import { lazy, Suspense, useEffect, useMemo } from 'react'
import GithubCorner from 'react-github-corner'

import { Container, ContainerEvent, Content } from './styles'

import DefaultLayout from 'components/communs/layouts/DefaultLayout'
import Spinner from 'components/communs/Spinner'

import { useGetLessonsQuery } from 'graphql/event/generated/graphql'
import { withHyGraphApollo } from 'lib/withHyGraphApollo'

const Sidebar = lazy(() => import('./Sidebar'))
const Video = lazy(() => import('./Video'))

function Event() {
  const router = useRouter()

  const { loading, error, data } = useGetLessonsQuery()

  const locationSlug = router.asPath.split('/')[2]

  const lesson = useMemo(() => {
    return data?.lessons.find((lesson) => lesson.slug === locationSlug)
  }, [data?.lessons, locationSlug])

  useEffect(() => {
    if (!error && !loading && !lesson && !data?.lessons[0].slug) {
      router.push('/')
    }
  }, [lesson, error, loading, router, data?.lessons])

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
        <Suspense fallback={<Spinner />}>
          <ContainerEvent>
            <Content>
              <Video
                slug={
                  lesson?.slug ? lesson.slug : String(data?.lessons[0].slug)
                }
              />
              <Sidebar
                loading={loading}
                error={error}
                lessons={data?.lessons}
              />
            </Content>
          </ContainerEvent>
        </Suspense>

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

export default withHyGraphApollo(Event)
