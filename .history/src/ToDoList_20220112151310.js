import "./styles/ToDoList";
function ToDoList(props) {
  return (
    <section className="list-container">
      <ul> {props.children}</ul>
    </section>
  );
}
export { ToDoList };
