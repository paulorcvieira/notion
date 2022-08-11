import { produce } from 'immer'

import { ICron } from 'interfaces/ICron'

import { ActionTypes } from './actions'

interface CyclesState {
  cycles: ICron[]
  activeCycleId: string | null
}

const initState = {
  pets: ['dog', 'cat'],
  packages: [
    { name: 'react', installed: true },
    { name: 'redux', installed: true },
  ],
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CRON:
      // return {
      //   ...state,
      //   cycles: state.cycles?.length
      //     ? [...state.cycles, action.payload.newCycle]
      //     : [action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CRON:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return {
      //         ...cycle,
      //         interruptedDate: new Date(),
      //       }
      //     }

      //     return cycle
      //   }),
      //   activeCycleId: null,
      // }
      return produce(state, (draft) => {
        draft.cycles = draft.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return {
              ...cycle,
              interruptedDate: new Date(),
            }
          }

          return cycle
        })
        draft.activeCycleId = null
      })
    case ActionTypes.MARK_CURRENT_CRON_AS_FINISHED:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return {
      //         ...cycle,
      //         endDate: new Date(),
      //       }
      //     }

      //     return cycle
      //   }),
      //   activeCycleId: null,
      // }
      return produce(state, (draft) => {
        draft.cycles = draft.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return {
              ...cycle,
              endDate: new Date(),
            }
          }

          return cycle
        })
        draft.activeCycleId = null
      })
    default:
      return state
  }
}
