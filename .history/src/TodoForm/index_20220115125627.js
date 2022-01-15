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
    setNewTodoValue(valueEvent);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue) {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };
  const whatButton = (openModal) => {
    if (!openModal) {
      return (
        <button onClick={onClickButton} className="button-text">
          Add ToDO
        </button>
      );
    } else {
      return (
        <button onClick={onClickButton} className="button-text">
          Close
        </button>
      );
    }
  return (
    <section className="form-container">
      <form onSubmit={onSubmit}>
        <label className="form-title">
          Please to save something write here
        </label>
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
