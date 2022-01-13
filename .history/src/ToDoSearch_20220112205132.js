import { useState } from "react";
import "./styles/ToDoSearch.css";
function ToDoSearch() {
  const [searchValue, setSearchValue] = useState("");
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <section className="search-container">
      <input
        className="search-input"
        placeholder="Picar cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
      ></input>
      <button className="search-button">Buscar tarea</button>
    </section>
  );
}
export { ToDoSearch };
