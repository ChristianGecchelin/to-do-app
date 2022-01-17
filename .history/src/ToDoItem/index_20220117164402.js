import "../ToDoList/ToDoList.css";
function ToDoItem(props) {
  return (
    <li className={`list-item ${props.completed && "list-completed"}`}>
      <span className="check" onClick={props.onComplete}></span>
      <p className={`text-item ${props.completed && "text-item-completed"}`}>
        {props.text}
      </p>
      <span className="delete" onClick={props.onDelete}></span>
    </li>
  );
}
export { ToDoItem };
