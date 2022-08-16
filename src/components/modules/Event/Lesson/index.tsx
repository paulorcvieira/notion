import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useRouter } from 'next/router'

import { CheckCircle, Lock } from 'styles/icons'

import {
  Box,
  Container,
  LessonDate,
  LessonTitle,
  LessonType,
  Status,
} from './styles'

interface LessonProps {
  title: string
  slug: string
  type: 'live' | 'class'
  availableAt: string
}

export function Lesson({ title, slug, type, availableAt }: LessonProps) {
  const { asPath } = useRouter()

  const availableDate = new Date(availableAt)

  const isLessonAvailable = isPast(availableDate)
  const availableDateFormatted = format(
    availableDate,
    "E '•' d 'de' MMMM '•' HH'h'mm",
    {
      locale: ptBR,
    },
  )

  const isActive = asPath.startsWith(`/event/lesson/${slug}`)

  return (
    <Container href={`/event/lesson/${slug}`}>
      <LessonDate>{availableDateFormatted}</LessonDate>

      <Box isActive={isActive}>
        <header>
          <LessonType available={isLessonAvailable} isActive={isActive}>
            {isLessonAvailable ? <CheckCircle size={18} /> : <Lock size={18} />}
            {isLessonAvailable ? 'Conteúdo liberado' : 'Em breve'}
          </LessonType>

          <Status isActive={isActive}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </Status>
        </header>

        <LessonTitle isActive={isActive}>{title.toLowerCase()}</LessonTitle>
      </Box>
    </Container>
  )
}
