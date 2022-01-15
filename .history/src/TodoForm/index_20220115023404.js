import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo } = React.useContext(TodoContext);
  const onCancel = () => {};
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = () => {
    addTodo();
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
