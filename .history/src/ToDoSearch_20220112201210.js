import "./styles/ToDoSearch.css";
function ToDoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event);
  };
  return (
    <section className="search-container">
      <input
        className="search-input"
        placeholder="Picar cebolla"
        onChange={onSearchValueChange}
      ></input>
      <button className="search-button">Buscar tarea</button>
    </section>
  );
}
export { ToDoSearch };
