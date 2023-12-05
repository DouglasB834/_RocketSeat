/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import "./App.css";
import { Header } from "./components/header/Header";
import { CardList } from "./components/cardList/CardList";
import { Button } from "./components/Button";

export interface IToDo {
  tarefa: string;
  concluido: boolean;
  id: number;
}
export interface IToDoList {
  todoList: IToDo;
  handleDelete: (id: number) => void;
  concluirTarefa: (id: number, value: boolean) => void;
}

const data: IToDo[] = [
  { tarefa: "Estudar React", concluido: true, id: 1 },
  {
    tarefa: "Estudar TypeScript",
    concluido: false,
    id: 2,
  },
];

function App() {
  const [todoList, setTodoList] = useState<IToDo[]>(data);

  const [novaTarefa, setNovaTarefa] = useState("");

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todoList) => todoList.id !== id));
  };

  const handleCriarTarefa = (event: React.FormEvent) => {
    event.preventDefault();

    const newToDo = {
      tarefa: novaTarefa,
      concluido: false,
      id: Number(Math.random().toFixed(2)) * 100,
    };
    setTodoList([...todoList, newToDo]);
    setNovaTarefa("");
  };

  const concluirTarefa = (id: number, value: boolean) => {
    const updateList = todoList.map((todoList) => {
      if (todoList.id === id) {
        //adicionar true ao concluido
        const concluido = {
          ...todoList,
          concluido: value,
        };
        return { ...concluido };
      }
      return { ...todoList };
    });
    setTodoList(updateList);
  };

  const handleTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setNovaTarefa(event.target.value);
  };

  const handle = () => {
    const tarefasConcluidas = todoList.filter((toDo) => toDo.concluido);

    return (
      <span>
        Concluidas:
        <strong>{` ${tarefasConcluidas.length} de ${todoList.length}`}</strong>
      </span>
    );
  };

  return (
    <main className="container">
      <div className="">
        <Header />
        <form className="content formToDo" onSubmit={handleCriarTarefa}>
          <input
            title="escrever tarefa"
            value={novaTarefa}
            type="text"
            placeholder="Adicionar nova tarefa"
            onChange={handleTodo}
            required
          />
          <Button disabled={!novaTarefa.trim().length} type="submit">
            {"Criar"} <span>📝</span>
          </Button>
        </form>
      </div>
      <ul className="ul_todoList content">
        <div className="ul_todoList_header">
          <p>Tarefas Criadas {todoList.length}</p> {handle()}
        </div>
        {todoList.length > 0 ? (
          todoList
            .sort((a, b) =>
              a.concluido === b.concluido ? 0 : a.concluido ? 1 : -1
            )
            .map((toDo) => (
              <CardList
                key={toDo.id}
                todoList={toDo}
                handleDelete={handleDelete}
                concluirTarefa={concluirTarefa}
              />
            ))
        ) : (
          <div>
            <p>Nenhuma tarefa cadastrada</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </ul>
    </main>
  );
}

export default App;
