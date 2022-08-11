import { useEffect, useState } from 'react'
import GithubCorner from 'react-github-corner'

import DefaultLayout from 'components/layouts/DefaultLayout'
import { Post } from 'components/Post'
import { Sidebar } from 'components/Sidebar'

import { IPost } from 'interfaces/IPosts'

import { Container } from 'styles/feed.styles'

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
    <DefaultLayout
      title="FeedNotion"
      description="Your next generation Cron"
      logoFileName="feed-logo.svg"
      headerTitle="Feed"
      headerColor="green"
      headerLogo="feed"
      headerLogoAlt="Logo FeedNotion"
    >
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
    </DefaultLayout>
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
