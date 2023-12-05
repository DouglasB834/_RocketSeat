import { IToDoList } from "../../App";
import style from "./CardList.module.css";

export const CardList = ({
  todoList,
  handleDelete,
  concluirTarefa,
}: IToDoList) => {
  const handleRemove = () => {
    handleDelete(todoList.id);
  };

  const toggleTaskStatus = () => {
    concluirTarefa(todoList.id, !todoList.concluido);
  };

  return (
    <li className={style.ul_todoList_content}>
      <label htmlFor="checkbox" className="checkout_input">
        <input
          name="concluir"
          type="checkbox"
          checked={todoList.concluido}
          readOnly
          className={style.checked_toDo}
          onClick={toggleTaskStatus}
        />
        <p onClick={toggleTaskStatus} className={style.checked_toDo}>
          {todoList.concluido ? "✅ Concluído" : "⭕ Pendente"}
          <span> ❯</span>
        </p>
        <p
          className={`${
            todoList.concluido ? style.lineThrough : style.card_text
          }`}
        >
          {todoList.tarefa}
        </p>
      </label>

      <button onClick={handleRemove}>Delete</button>
    </li>
  );
};
