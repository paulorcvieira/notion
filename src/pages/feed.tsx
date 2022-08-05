import Head from 'next/head'
import GithubCorner from 'react-github-corner'

import { Header } from 'components/Header'
import { Post } from 'components/Post'
import { Sidebar } from 'components/Sidebar'

import { IPost } from 'interfaces/IPosts'

import { useEffect, useState } from 'react'
import { Container } from 'styles/feed-notion.styles'

interface FeedNotionProps {
  posts: IPost[]
}

export default function FeedNotion({ posts }: FeedNotionProps) {
  const [postsList, setPostsList] = useState<IPost[]>([...posts])

  useEffect(() => {
    if (!postsList.length) {
      setPostsList(posts)
    }
  }, [posts, postsList])

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
          {postsList.map((post) => (
            <Post key={post.id} post={post} />
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
  const response = await fetch('http://localhost:3000/api/posts')
  const posts = await response.json()

  return {
    revalidate: 60 * 60 * 24,
    props: {
      posts,
    },
  }
}
