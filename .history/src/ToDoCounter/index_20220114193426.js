import React from "react";
import "./ToDoCounter.css";
import { TodoContext } from "../TodoContext";
function ToDoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <section className="counter-container">
      <div className="title-card">
        <h2 className="counter-title">
          You have completed <br />
          {completedTodos} of {totalTodos} duties.
        </h2>
      </div>
      {/* como podria cambiar ese br? */}
      <p className="counter-congrats">Good job !</p>
    </section>
  );
}
export { ToDoCounter };
/* Modificar que sea variable la cantidad de tareas completadas, que el good job cambie cuando llevo menos de la mitad de tareas completadas. */
