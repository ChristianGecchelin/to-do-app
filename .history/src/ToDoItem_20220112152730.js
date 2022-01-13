function ToDoItem(props) {
  return (
    <li className="list-item">
      <span className="check"></span>
      <p className="text-item">{props.text}</p>
      <span className="delete">X</span>
    </li>
  );
}
export { ToDoItem };
