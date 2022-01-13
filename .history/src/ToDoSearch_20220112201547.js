import "./styles/ToDoSearch.css";
function ToDoSearch() {
  const onSearchValueChange = (event.target.value) => {
    console.log(event.target.value);
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
