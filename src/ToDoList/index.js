import "./ToDoList.css";
function ToDoList(props) {
  return (
    <section className="list-container">
      <ul className="item-container"> {props.children}</ul>
    </section>
  );
}
export { ToDoList };
