function ToDoItem(props) {
  const onComplete = () => {
    alert(`Completaste la tarea ${props.text}`);
  };
  return (
    <li className="list-item">
      <span className="check"></span>
      <p className={`text-item ${props.completed && "text-item-completed"}`}>
        {props.text}
      </p>
      <span className="delete"></span>
    </li>
  );
}
export { ToDoItem };
