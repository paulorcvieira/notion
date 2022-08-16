import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useCallback,
  useState,
} from 'react'

import { IPost } from 'interfaces/IPosts'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import {
  Author,
  Comments,
  Container,
  Content,
  FormButton,
  FormComment,
  PostHeader,
} from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(post.comments)
  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtFormatted = format(
    new Date(post.created_at),
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  )

  const publishedAtRelativeToNow = formatDistanceToNow(
    new Date(post.created_at),
    {
      locale: ptBR,
      addSuffix: true,
    },
  )

  const handleNewCommentTextChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.target.setCustomValidity('')
      setNewCommentText(e.target.value)
    },
    [setNewCommentText],
  )

  const handleCreateNewComment = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      const newComment = {
        id: String(comments.length + 1),
        author: {
          name: 'Guest',
          role: 'unknown',
          avatar_url:
            'https://source.unsplash.com/collection/jeo8SUkB8ug/100x100?q=50',
        },
        claps: 0,
        comment: newCommentText,
        created_at: new Date(),
      }

      setComments((state) => [...state, newComment])
      setNewCommentText('')
    },
    [newCommentText, setComments, setNewCommentText, comments],
  )

  const deleteComment = useCallback(
    (id: string) => {
      const commentsFiltered = comments.filter((comment) => comment.id !== id)
      setComments([...commentsFiltered])
    },
    [comments, setComments],
  )

  const addClapOnComment = useCallback(
    (id: string) => {
      const commentsWithOneClap = comments.map((comment) => {
        if (comment.id === id) {
          Object.assign(comment, { claps: comment.claps + 1 })
        }
        return comment
      })

      setComments([...commentsWithOneClap])
    },
    [comments, setComments],
  )

  const handleNewCommentInvalid = useCallback(
    (e: InvalidEvent<HTMLTextAreaElement>) => {
      e.target.setCustomValidity('É obrigatório digitar uma mensagem!')
    },
    [],
  )

  const isNewCommentEmpty = !newCommentText.length

  return (
    <Container>
      <PostHeader>
        <Author>
          <Avatar src={post.author.avatar_url} hasBorder small />
          <div>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </Author>

        <time
          title={publishedAtFormatted}
          dateTime={new Date(post.created_at).toISOString()}
        >
          {publishedAtRelativeToNow}
        </time>
      </PostHeader>

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />

      <FormComment onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentTextChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <FormButton type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </FormButton>
        </footer>
      </FormComment>

      <Comments>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            data={comment}
            onDeleteComment={deleteComment}
            onAddClapOnComment={addClapOnComment}
          />
        ))}
      </Comments>
    </Container>
  )
}
