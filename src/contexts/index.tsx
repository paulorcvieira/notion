import { ReactNode } from 'react'

import { TasksProvider } from './Task'
import { ThemeProvider } from './Theme'

type AppProviderProps = {
  children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <TasksProvider>
        {children}
      </TasksProvider>
    </ThemeProvider>
  )
}
