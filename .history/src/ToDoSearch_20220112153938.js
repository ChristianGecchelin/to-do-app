import "./styles/ToDoSearch.css";
function ToDoSearch() {
  return (
    <section className="search-container">
      <input className="search-input" placeholder="Picar cebolla"></input>
      <button className="search-button">+</button>;
    </section>
  );
}
export { ToDoSearch };
