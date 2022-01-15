import React from "react";

function TodoForm() {
  const onCancel = () => {};

  const onAdd = () => {};
  return (
    <form>
      <label>miau</label>
      <textarea placeholder="Finish the react project"></textarea>
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={onAdd}>
          Add
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
