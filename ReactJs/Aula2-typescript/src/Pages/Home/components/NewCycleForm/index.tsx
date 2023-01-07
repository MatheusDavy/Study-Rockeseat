import { FormContainer, TaskInput, TimerInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  /*
  function register(name: string){
    return(
      onChange: ()=> void;  
      onFocus: ()=> void;  
      onBlur: ()=> void;  
      ....    
    )
  }
  */

  return (
    <FormContainer>
      <label htmlFor="task">Vou Trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value=""></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <TimerInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
