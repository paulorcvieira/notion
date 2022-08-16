import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import { useCallback } from 'react'
import GithubCorner from 'react-github-corner'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { HandPalm, Play } from 'styles/icons'

import { Countdown, CronHeader } from 'components/cron'
import DefaultLayout from 'components/layouts/DefaultLayout'

import {
  Container,
  Content,
  ErrorBox,
  ErrorContainer,
  StartCountdownButton,
  StopCountdownButton,
} from 'styles/cron.styles'

import { useCron } from 'hooks/useCron'

const NewCycleForm = dynamic(() => import('components/cron/NewCycleForm'), {
  ssr: false,
})

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, '* Informe o título da tarefa!').max(50),
  minutesAmount: zod
    .number()
    .min(1, '* O ciclo precisa ter no mínimo 5 minutos!')
    .max(100, '* O ciclo pode ter no máximo 100 minutos!'),
})

type INewTaskFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function CronNotion() {
  const {
    activeCycle,
    markCurrentCycleAsInterrupted,
    setSecondsPassed,
    createNewTask,
  } = useCron()

  const newCycleForm = useForm<INewTaskFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = newCycleForm

  const handleCreateNewTask = useCallback(
    async (data: INewTaskFormData) => {
      createNewTask(data)
      reset()
    },
    [reset, createNewTask],
  )

  const handleInterruptCycle = useCallback(() => {
    markCurrentCycleAsInterrupted()
    setSecondsPassed(0)
  }, [markCurrentCycleAsInterrupted, setSecondsPassed])

  return (
    <DefaultLayout
      title="CronNotion"
      description="Your next generation Cron"
      logoFileName="cron-logo.svg"
      headerTitle="Cron"
      headerColor="purple"
      headerLogo="cron"
      headerLogoAlt="Logo CronNotion"
    >
      <Container>
        <CronHeader />

        <ErrorContainer>
          <ErrorBox error={!!errors.task || !!errors.minutesAmount}>
            {errors.task && <span>{errors.task.message}</span>}
            {errors.minutesAmount && (
              <span>{errors.minutesAmount.message}</span>
            )}
          </ErrorBox>
        </ErrorContainer>

        <Content>
          <FormProvider {...newCycleForm}>
            <form onSubmit={handleSubmit(handleCreateNewTask)}>
              <NewCycleForm />

              <Countdown />

              {activeCycle ? (
                <StopCountdownButton
                  type="button"
                  onClick={() => handleInterruptCycle()}
                >
                  <HandPalm size={24} />
                  Interromper
                </StopCountdownButton>
              ) : (
                <StartCountdownButton type="submit" disabled={isSubmitting}>
                  <Play size={24} />
                  Começar
                </StartCountdownButton>
              )}
            </form>
          </FormProvider>
        </Content>

        <GithubCorner
          href="https://github.com/paulorcvieira"
          octoColor="#5e60ce"
          bannerColor="#29292e"
          size={86}
        />
      </Container>
    </DefaultLayout>
  )
}
