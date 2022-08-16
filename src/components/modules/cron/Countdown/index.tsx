import { differenceInSeconds } from 'date-fns'
import { useEffect, useMemo } from 'react'

import { useCron } from 'hooks/useCron'

import { Container, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useCron()

  const totalSeconds = useMemo(
    () => (activeCycle ? activeCycle.minutesAmount * 60 : 0),
    [activeCycle],
  )

  useEffect(() => {
    let interval: any
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, setSecondsPassed, markCurrentCycleAsFinished])

  const currentSeconds = useMemo(
    () => (activeCycle ? totalSeconds - amountSecondsPassed : 0),
    [activeCycle, amountSecondsPassed, totalSeconds],
  )

  const minutesAmount = useMemo(
    () => Math.floor(currentSeconds / 60),
    [currentSeconds],
  )
  const secondsAmount = useMemo(() => currentSeconds % 60, [currentSeconds])

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Cron`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <Container>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </Container>
  )
}
