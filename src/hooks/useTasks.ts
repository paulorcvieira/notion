import { TaskContextData, TasksContext } from 'contexts/Task'
import { useContext } from 'react'

export const useTasks = () => {
  const context = useContext<TaskContextData>(TasksContext)
  if (!context) throw new Error('useTask must be use within a TaskProvider')
  return useContext(TasksContext)
}
