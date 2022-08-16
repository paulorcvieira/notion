import { useRouter } from 'next/router'
import { lazy, Suspense, useEffect, useMemo } from 'react'

import { Container, Content } from './styles'

import Spinner from 'components/communs/Spinner'
import { useGetLessonsQuery } from 'graphql/generated'

const Sidebar = lazy(() => import('./Sidebar'))
const Video = lazy(() => import('./Video'))

export default function Event() {
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
    <Suspense fallback={<Spinner />}>
      <Container>
        <Content>
          <Video
            slug={lesson?.slug ? lesson.slug : String(data?.lessons[0].slug)}
          />
          <Sidebar loading={loading} error={error} lessons={data?.lessons} />
        </Content>
      </Container>
    </Suspense>
  )
}
