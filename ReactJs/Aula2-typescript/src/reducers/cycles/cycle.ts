/* eslint-disable no-case-declarations */
import { ActionTypes } from './actions'
import produce from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: String | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }
      // Sabemos que não podemos simplesmete atrubuir um valor direto dentro de um estado sem substituir o estado inteiro (como mostra o caso acima)
      // Com a lib 'immer, nós podemos fazer isso
      return produce(state, (draft) => {
        // o 'draft' é uma cópia do 'state' passado no parâmetro anterior
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      console.log('chegou')
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    // const currentCycleIndexx = state.cycles.findIndex((cycle) => {
    //   return cycle.id === state.activeCycleId
    // })

    // if (currentCycleIndexx < 0) {
    //   return state
    // }

    // return produce(state, (draft) => {
    //   console.log(draft.cycles[currentCycleIndexx].finishedDate)
    //   draft.cycles[currentCycleIndexx].finishedDate = new Date()
    //   draft.activeCycleId = null
    // })

    default:
      return state
  }
}
