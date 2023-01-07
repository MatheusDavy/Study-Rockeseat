import { Play, HandPalm } from 'phosphor-react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useContext } from 'react'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider, useForm } from 'react-hook-form'

interface NewCycleData {
  task: string
  minutesAmount: number
}

export function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleData) {
    createNewCycle(data)
    // Para podermos resetar os valores do formulário, precisamos definir o defaultValues no useForm
    reset()
  }

  // Vai observar o input com o id='task'
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        {/* Dento da função do handleSubmit do useForm, nós passamos outra função */}
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
          <Countdown />
        </FormProvider>

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
