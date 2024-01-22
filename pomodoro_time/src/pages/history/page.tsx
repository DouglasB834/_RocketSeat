import { HistoryCaontainer, HistoryList, Status } from "./styled";

export const History = () => {
  return (
    <HistoryCaontainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Inicio</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>10 minutos</td>
              <td>10/10/2022</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>20 minutos</td>
              <td>10/10/2022</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 3</td>
              <td>30 minutos</td>
              <td>10/10/2022</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 4</td>
              <td>30 minutos</td>
              <td>10/10/2022</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 5</td>
              <td>30 minutos</td>
              <td>10/10/2022</td>
              <td>
                <Status statusColor="green">Pendente</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryCaontainer>
  );
};
