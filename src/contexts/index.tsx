import { ReactNode } from 'react'

import { UserProvider } from './Auth'
import { CronProvider } from './Cron'
import { TasksProvider } from './Task'
import { ThemeProvider } from './Theme'

type AppProviderProps = {
  children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <TasksProvider>
          <CronProvider>{children}</CronProvider>
        </TasksProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
