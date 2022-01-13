function ToDoItem(props) {
  const onDelete = () => {
    alert(`Borraste la tarea ${props.text}`);
  };
  return (
    <li className="list-item">
      <span className="check" onClick={props.onComplete}></span>
      <p className={`text-item ${props.completed && "text-item-completed"}`}>
        {props.text}
      </p>
      <span className="delete" onClick={onDelete}></span>
    </li>
  );
}
export { ToDoItem };
