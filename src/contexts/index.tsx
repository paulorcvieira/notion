import { ReactNode } from 'react'

import { CronProvider } from './Cron'
import { TasksProvider } from './Task'
import { ThemeProvider } from './Theme'

type AppProviderProps = {
  children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <TasksProvider>
        <CronProvider>{children}</CronProvider>
      </TasksProvider>
    </ThemeProvider>
  )
}
