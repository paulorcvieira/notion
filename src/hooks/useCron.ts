import { CronContext, CronContextData } from 'contexts/Cron'
import { useContext } from 'react'

export const useCron = () => {
  const context = useContext<CronContextData>(CronContext)
  if (!context) throw new Error('useCron must be use within a CronProvider')
  return useContext(CronContext)
}
