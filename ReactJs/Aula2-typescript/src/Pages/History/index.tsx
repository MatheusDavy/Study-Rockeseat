import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import ptBR from 'date-fns/esm/locale/pt-BR'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useContext } from 'react'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Ínicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cyclesContent) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <tr key={cyclesContent.id}>
                  <td>{cyclesContent.task}</td>
                  <td>{cyclesContent.minutesAmount} minuto</td>
                  <td>
                    {formatDistanceToNow(new Date(cyclesContent.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cyclesContent.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cyclesContent.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cyclesContent.interruptedDate &&
                      !cyclesContent.finishedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
