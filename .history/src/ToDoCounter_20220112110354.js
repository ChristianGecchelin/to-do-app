import "./styles/ToDoCounter.css";
function ToDoCounter() {
  return (
    <section className="counter-container">
      <div className="title-card">
        <h2 className="counter-title">
          You have completed <br />2 of 3 duties.
        </h2>
      </div>
      {/* como podria cambiar ese br? */}
      <div className="congrats-card">
        <p className="counter-congrats">Good job !</p>
      </div>
    </section>
  );
}
export { ToDoCounter };
/* Modificar que sea variable la cantidad de tareas completadas, que el good job cambie cuando llevo menos de la mitad de tareas completadas. */
