import React from "react";

function TodoForm() {
  const { saveTodo } = React.useContext(TodoContext);
  const onCancel = () => {};

  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit}>
      <label>miau</label>
      <textarea placeholder="Finish the react project"></textarea>
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
