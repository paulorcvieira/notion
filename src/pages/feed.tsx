import Head from 'next/head';
import { useEffect, useState } from 'react';
import GithubCorner from 'react-github-corner';

import { Header } from 'components/Header';
import { Post } from 'components/Post';
import { Sidebar } from 'components/Sidebar';

import { IPost } from 'interfaces/IPosts';

import { Container } from 'styles/feed-notion.styles';

interface FeedNotionProps {
  posts: string
}

export default function FeedNotion({ posts }: FeedNotionProps) {
  const [postsList, setPostsList] = useState<IPost[]>([]);

  useEffect(() => {
    if (!postsList.length) {
      setPostsList(JSON.parse(posts))
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/feed-logo-48.svg" />
        <link rel="apple-touch-icon" href="/assets/feed-logo-48.svg" />
        <title>FeedNotion</title>
        <meta name="description" content="Your next generation feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Feed" />

      <Container>
        <Sidebar />
        <main>
          {postsList.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>

        <GithubCorner
          href="https://github.com/paulorcvieira"
          octoColor="#00875f"
          bannerColor="#29292e"
          size={86}
        />
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  // const response = await fetch('http://localhost:3000/api/posts')
  // const posts = await response.json()

  const posts = [
    {
      id: '1dsdadsdasdw',
      author: {
        name: 'Paulo',
        role: 'Software Engineer',
        avatar_url: 'https://github.com/paulorcvieira.png',
      },
      created_at: new Date(),
      content: `
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz especialmente para o meu portifólio. O nome do projeto é FeedNotion 🚀</p>
        <p>👉&nbsp;&nbsp;<a href="#">paulorcvieira/feed-notion</a></p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#rocketseat</a>
          <a href="#">#rocketseat</a>
        </p>
      `,
      draft: false,
      comments: [
        {
          id: '1',
          author: {
            name: 'Carol',
            role: 'Software Engineer',
            avatar_url: 'https://github.com/carolslima.png'
          },
          comment: 'Muito bom Paulo, parabéns!! 👏👏',
          claps: 23,
          created_at: new Date("2022-08-03T21:00:00.000Z"),
        },
        {
          id: '2',
          author: {
            name: 'Carmen',
            role: 'Manager',
            avatar_url: 'https://source.unsplash.com/collection/1390381/100x100?q=50'
          },
          comment: '💜💜',
          claps: 39,
          created_at: new Date()
        }
      ]
    }
  ]

  return {
    revalidate: 60 * 60 * 24,
    props: {
      posts: JSON.stringify(posts)
    }
  }
}
