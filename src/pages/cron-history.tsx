import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import GithubCorner from 'react-github-corner'

import { CronHeader } from 'components/cron'

import DefaultLayout from 'components/layouts/DefaultLayout'
import {
  Container,
  Content,
  HistoryList,
  Status,
} from 'styles/cron-history.styles'

import { useCron } from 'hooks/useCron'

export default function CronHistory() {
  const { cycles } = useCron()

  return (
    <DefaultLayout
      title="CronNotion - History"
      description="Your next generation Cron"
      logoFileName="cron-logo.svg"
      headerTitle="Cron"
      headerColor="purple"
      headerLogo="cron"
      headerLogoAlt="Logo CronNotion"
    >
      <Container>
        <CronHeader />

        <Content>
          <HistoryList>
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
                {!!cycles &&
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
                  ))}
              </tbody>
            </table>
          </HistoryList>
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
