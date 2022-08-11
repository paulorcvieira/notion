import { ICron } from 'interfaces/ICron'

export enum ActionTypes {
  ADD_NEW_CRON = 'ADD_NEW_CRON',
  INTERRUPT_CURRENT_CRON = 'INTERRUPT_CURRENT_CRON',
  MARK_CURRENT_CRON_AS_FINISHED = 'MARK_CURRENT_CRON_AS_FINISHED',
}

export function addNewCronAction(newCycle: ICron) {
  return {
    type: ActionTypes.ADD_NEW_CRON,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCronAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CRON_AS_FINISHED,
  }
}

export function interruptCurrentCronAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CRON,
  }
}
