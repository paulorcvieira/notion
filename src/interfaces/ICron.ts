export interface ICron {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  endDate?: Date
}
