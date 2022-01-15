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
    const valueEvent = event.target.value;
    if (valueEvent.length > 0) {
      console.log(valueEvent);
      setNewTodoValue(valueEvent);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <section className="form-container">
      <form onSubmit={onSubmit}>
        <label className="form-title">Write your duty</label>
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
