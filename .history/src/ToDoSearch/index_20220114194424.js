import React from "react";
import "./ToDoSearch.css";
import { TodoContext } from "../TodoContext";
function ToDoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  /* destructuro para no hacer props.searchValue lo pongo entre llaves y solo anoto el nombre de las props que paso */
  const onSearchValueChange = (event) => {
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
      {/* <button className="search-button">Complete the input to search</button> */}
    </section>
  );
}
export { ToDoSearch };
