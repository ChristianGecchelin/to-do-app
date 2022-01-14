import React from "react";

function TodoForm() {
  const onCancel = () => {};

  const onAdd = () => {};
  return (
    <form>
      <label>miau</label>
      <textarea placeholder="Finish the react project"></textarea>
      <div>
        <button onClick={onCancel}>Cancell</button>
        <button onClick={onAdd}>Add</button>
      </div>
    </form>
  );
}
export { TodoForm };
