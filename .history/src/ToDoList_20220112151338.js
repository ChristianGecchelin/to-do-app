import "./styles/ToDoList.css";
function ToDoList(props) {
  return (
    <section className="list-container">
      <ul> {props.children}</ul>
    </section>
  );
}
export { ToDoList };
