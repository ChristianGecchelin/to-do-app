import "./styles/ToDoCounter.css";
function ToDoCounter({ total, completed }) {
  return (
    <section className="counter-container">
      <div className="title-card">
        <h2 className="counter-title">
          You have completed <br />
          {completed} of {total} duties.
        </h2>
      </div>
      {/* como podria cambiar ese br? */}
      <p className="counter-congrats">Good job !</p>
    </section>
  );
}
export { ToDoCounter };
/* Modificar que sea variable la cantidad de tareas completadas, que el good job cambie cuando llevo menos de la mitad de tareas completadas. */
