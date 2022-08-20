import { IPost } from 'interfaces/IPosts'
import dynamic from 'next/dynamic'

export interface FeedNotionProps {
  posts: IPost[]
}

const Feed = dynamic(() => import('components/modules/feed'), {
  ssr: false,
})

export default function FeedNotion({ posts }: FeedNotionProps) {
  return <Feed posts={posts} />
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts`)
  const posts = await response.json()

  return {
    revalidate: 60 * 60 * 24,
    props: {
      posts,
    },
  }
}
