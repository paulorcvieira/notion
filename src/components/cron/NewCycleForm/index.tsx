import { useCron } from 'hooks/useCron'
import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle, cycles } = useCron()

  const formContext = useFormContext()

  const {
    register,
    formState: { errors },
  } = formContext

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        error={!!errors.task}
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        {!!cycles &&
          cycles.map((cycle) => <option key={cycle.id} value={cycle.task} />)}
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        min={0}
        max={100}
        error={!!errors.minutesAmount}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
