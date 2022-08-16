import dynamic from 'next/dynamic'

const CronHistory = dynamic(
  () => import('components/modules/cron/CronHistory'),
  {
    ssr: false,
  },
)

export default function CronHistoryNotion() {
  return <CronHistory />
}
