import dynamic from 'next/dynamic'

const Event = dynamic(() => import('components/modules/Event'), {
  ssr: false,
})

export default function LessonPage() {
  return <Event />
}
