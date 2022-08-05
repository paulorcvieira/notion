import { ReactNode } from 'react'
import { TasksProvider } from './Task'

type AppProviderProps = {
  children: ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <TasksProvider>
      {children}
    </TasksProvider>
  )
}
