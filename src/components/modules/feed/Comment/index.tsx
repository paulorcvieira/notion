import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IComment } from 'interfaces/IPosts'

import { HandsClapping, Trash } from 'styles/icons'

import { Avatar } from '../Avatar'

import {
  Box,
  Clap,
  CommentContent,
  Container,
  Content,
  Header,
  HeaderContent,
} from './styles'

interface CommentProps {
  data: IComment
  onDeleteComment: (id: string) => void
  onAddClapOnComment: (id: string) => void
}

export function Comment({
  data,
  onDeleteComment,
  onAddClapOnComment,
}: CommentProps) {
  const publishedAtFormatted = format(
    new Date(data.created_at),
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  )

  const publishedAtRelativeToNow = formatDistanceToNow(
    new Date(data.created_at),
    {
      locale: ptBR,
      addSuffix: true,
    },
  )

  return (
    <Container>
      <Avatar src={data.author.avatar_url} small />

      <Box>
        <Content>
          <Header>
            <HeaderContent>
              <strong>{data.author.name}</strong>
              <time
                title={publishedAtFormatted}
                dateTime={new Date(data.created_at).toISOString()}
              >
                {publishedAtRelativeToNow}
              </time>
            </HeaderContent>

            <button
              title="Apagar comentário"
              onClick={() => onDeleteComment(data.id)}
            >
              <Trash size={20} />
            </button>
          </Header>

          <CommentContent>
            <p>{data.comment}</p>
          </CommentContent>
        </Content>

        <Clap>
          <button type="button" onClick={() => onAddClapOnComment(data.id)}>
            <HandsClapping />
            Aplaudir
          </button>
          <span>{data.claps}</span>
        </Clap>
      </Box>
    </Container>
  )
}
