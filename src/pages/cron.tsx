import dynamic from 'next/dynamic'

const Cron = dynamic(() => import('components/modules/cron'), {
  ssr: false,
})

export default function CronNotion() {
  return <Cron />
}
