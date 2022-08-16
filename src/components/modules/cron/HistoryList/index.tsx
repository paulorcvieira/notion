import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { useCron } from 'hooks/useCron'

import { Container, History, Status } from './styles'

export default function HistoryList() {
  const { cycles } = useCron()

  return (
    <Container>
      <History>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.length ? (
              cycles.map((cron) => (
                <tr key={cron.id}>
                  <td>{cron.task}</td>
                  <td>{cron.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cron.startDate), {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cron.interruptedDate && (
                      <Status variant="interrupted">Interrompido</Status>
                    )}

                    {cron.endDate && (
                      <Status variant="concluded">Concluído</Status>
                    )}

                    {!cron.endDate && !cron.interruptedDate && (
                      <Status variant="inProgress">Em andamento</Status>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="empty">
                <td colSpan={4}>Nenhum ciclo foi cadastrado ainda!</td>
              </tr>
            )}
          </tbody>
        </table>
      </History>
    </Container>
  )
}
