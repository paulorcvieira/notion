import { ApolloError } from '@apollo/client'

import { ILesson } from 'interfaces/IEvent'

import { Lesson } from '../Lesson'

import { Container, Lessons, Title } from './styles'

interface SidebarProps {
  lessons?: ILesson[]
  error?: ApolloError
  loading: boolean
}

export default function Sidebar({ lessons, loading, error }: SidebarProps) {
  return (
    <Container>
      <Title>🎮 Horizon Forbidden West</Title>

      <Lessons>
        {error ? (
          <p>Erro ao carregar aulas</p>
        ) : loading ? (
          <p>Carregando aulas...</p>
        ) : (
          lessons?.map((lesson) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              type={lesson.lessonType}
              availableAt={lesson.availableAt}
            />
          ))
        )}
      </Lessons>
    </Container>
  )
}
