import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CalendarCheck,
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from 'styles/icons'

import {
  Avatar,
  Buttons,
  Class,
  Container,
  Description,
  Details,
  Empty,
  Footer,
  Instructor,
  Material,
  MaterialCenter,
  MaterialLeft,
  MaterialRight,
  Materials,
  Profile,
  VideoContainer,
} from './styles'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from 'graphql/generated'

interface VideoProps {
  slug: string
}

export default function Video({ slug }: VideoProps) {
  const { loading, error, data } = useGetLessonBySlugQuery({
    variables: { slug },
  })

  return (
    <Container>
      {error ? (
        <p>Erro ao carregar aula</p>
      ) : !loading && data?.lesson ? (
        <>
          <VideoContainer>
            <div>
              {data && data.lesson && data.lesson.videoId && (
                <Player theme="dark">
                  <Youtube videoId={data?.lesson.videoId} />
                  <DefaultUi />
                </Player>
              )}
            </div>
          </VideoContainer>

          <Class>
            <Description>
              <Details>
                <h1>{data?.lesson.title}</h1>
                <p>{data?.lesson.description}</p>

                {data.lesson.teacher && (
                  <Instructor>
                    <Avatar>
                      <img
                        src={data.lesson.teacher.avatarURL}
                        alt={data.lesson.teacher.name}
                      />
                    </Avatar>
                    <Profile>
                      <strong>{data.lesson.teacher.name}</strong>
                      <span>{data.lesson.teacher.bio}</span>
                    </Profile>
                  </Instructor>
                )}
              </Details>

              <Buttons>
                <a href="#">
                  <DiscordLogo size={24} />
                  Comunidade no discord
                </a>
                <a href="#">
                  <Lightning size={24} />
                  Acesse o desafio
                </a>
              </Buttons>
            </Description>

            <Materials>
              <Material href="#">
                <MaterialLeft>
                  <FileArrowDown size={40} />
                </MaterialLeft>
                <MaterialCenter>
                  <strong>Material Complementar</strong>
                  <p>
                    Acesse o material complementar para acelerar o seu
                    desenvolvimento
                  </p>
                </MaterialCenter>
                <MaterialRight>
                  <CaretRight size={24} />
                </MaterialRight>
              </Material>

              <Material href="#">
                <MaterialLeft>
                  <FileArrowDown size={40} />
                </MaterialLeft>
                <MaterialCenter>
                  <strong>Wallpapers exclusivos</strong>
                  <p>
                    Baixe wallpapers exclusivos do evento e personalize a sua
                    máquina
                  </p>
                </MaterialCenter>
                <MaterialRight>
                  <CaretRight size={24} />
                </MaterialRight>
              </Material>
            </Materials>
          </Class>
        </>
      ) : (
        <Empty>Carregando...</Empty>
      )}

      <Footer>
        <div>
          <CalendarCheck size={24} />
          <a href="#">EventNotion - Todos os direitos reservados</a>
        </div>
        <div>
          <a href="#">Políticas de privacidade</a>
        </div>
      </Footer>
    </Container>
  )
}
