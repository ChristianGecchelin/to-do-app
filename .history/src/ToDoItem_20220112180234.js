function ToDoItem(props) {
  const onComplete = () => {
    alert(`Completaste la tarea ${props.text}`);
  };
  const onDelete = () => {
    alert(`Borraste la tarea ${props.text}`);
  };
  return (
    <li className="list-item">
      <span className="check" onClick={onComplete}></span>
      <p className={`text-item ${props.completed && "text-item-completed"}`}>
        {props.text}
      </p>
      <span className="delete" onClick={onDelete}></span>
    </li>
  );
}
export { ToDoItem };
