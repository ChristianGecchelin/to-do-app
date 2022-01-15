import React from "react";
import { TodoContext } from "../TodoContext";
import "TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>miau</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Finish the react project"
      ></textarea>
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
export { TodoForm };
