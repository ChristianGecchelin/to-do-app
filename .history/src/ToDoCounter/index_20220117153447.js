import React from "react";
import "./ToDoCounter.css";
import { TodoContext } from "../TodoContext";
function ToDoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  const whatText = (totalTodos, completedTodos) => {
    const percentageComplete = (completedTodos * 100) / totalTodos;
    if (percentageComplete >= 50) {
      return (
        <div className="counter-congrats-container">
          <p className="counter-congrats">Good job 😎</p>
        </div>
      );
    } else {
      return (
        <div className="counter-fail-container">
          <p className="counter-fail">Work Hard !</p>
        </div>
      );
    }
  };
  return (
    <section className="counter-container">
      <div className="title-card">
        <h2 className="counter-title">
          You have completed <br />
          {completedTodos} of {totalTodos} duties.
        </h2>
      </div>
      {/* como podria cambiar ese br? */}

      {whatText(totalTodos, completedTodos)}
    </section>
  );
}
export { ToDoCounter };
/* Modificar que sea variable la cantidad de tareas completadas, que el good job cambie cuando llevo menos de la mitad de tareas completadas. */
