import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

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
    <section className="form-container">
      <form onSubmit={onSubmit}>
        <label className="form-title">miau</label>
        <textarea
          className="form-note"
          value={newTodoValue}
          onChange={onChange}
          placeholder="Finish the react project"
        ></textarea>
        <div className="form-button-container">
          <button
            className="form-button-cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button className="form-button-add" type="submit">
            Add
          </button>
        </div>
      </form>
    </section>
  );
}
export { TodoForm };
