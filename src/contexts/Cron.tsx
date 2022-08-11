import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import { differenceInSeconds } from 'date-fns'
import { ICron } from 'interfaces/ICron'
import {
  addNewCronAction,
  interruptCurrentCronAction,
  markCurrentCronAsFinishedAction,
} from 'reducers/cycles/actions'
import { cyclesReducer } from 'reducers/cycles/reducer'

interface ICreateNewCycleData {
  task: string
  minutesAmount: number
}

export interface CronContextData {
  cycles: ICron[]
  activeCycle?: ICron
  activeCycleId: string | null
  amountSecondsPassed: number
  setAmountSecondsPassed: Dispatch<SetStateAction<number>>
  markCurrentCycleAsFinished: () => void
  markCurrentCycleAsInterrupted: () => void
  setSecondsPassed: (seconds: number) => void
  createNewTask: (data: ICreateNewCycleData) => Promise<void>
}

interface CronProviderProps {
  children: ReactNode
}

export const CronContext = createContext<CronContextData>({} as CronContextData)

export function CronProvider({ children }: CronProviderProps) {
  const keyStorage = '@cron-notion:cron-state-1.0.0'

  const initialState = { cycles: [], activeCycleId: null }

  const [cronState, dispatch] = useReducer(cyclesReducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const storedStateAsJSON = localStorage.getItem(keyStorage)
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    }
    return {
      cycles: [],
      activeCycleId: null,
    }
  })

  const { cycles, activeCycleId } = cronState

  const activeCycle = useMemo(() => {
    return activeCycleId
      ? cycles.find((cycle) => cycle.id === activeCycleId)
      : undefined
  }, [activeCycleId, cycles])

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), activeCycle.startDate)
    }

    return 0
  })

  useEffect(() => {
    const cronStateAsJSON = JSON.stringify(cronState)
    localStorage.setItem(keyStorage, cronStateAsJSON)
  }, [cronState])

  const markCurrentCycleAsFinished = useCallback(() => {
    dispatch(markCurrentCronAsFinishedAction())

    setAmountSecondsPassed(0)
  }, [setAmountSecondsPassed])

  const markCurrentCycleAsInterrupted = useCallback(() => {
    dispatch(interruptCurrentCronAction())

    setAmountSecondsPassed(0)
  }, [setAmountSecondsPassed])

  const setSecondsPassed = useCallback((seconds: number) => {
    setAmountSecondsPassed(seconds)
  }, [])

  const createNewTask = useCallback(
    async (data: ICreateNewCycleData) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          const id = String(Date.now())

          const newCycle: ICron = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
          }

          dispatch(addNewCronAction(newCycle))

          setSecondsPassed(0)

          resolve(undefined)
        }, 1000)
      })
    },
    [setSecondsPassed],
  )

  return (
    <CronContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setAmountSecondsPassed,
        markCurrentCycleAsFinished,
        markCurrentCycleAsInterrupted,
        setSecondsPassed,
        createNewTask,
      }}
    >
      {children}
    </CronContext.Provider>
  )
}
