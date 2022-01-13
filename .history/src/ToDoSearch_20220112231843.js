import { useState } from "react";
import "./styles/ToDoSearch.css";
function ToDoSearch({ searchValue, setSearchValue }) {
  /* destructuro para no hacer props.searchValue lo pongo entre llaves y solo anoto el nombre de las props que paso */
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
