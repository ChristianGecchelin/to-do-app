import "./styles/ToDoCounter.css";
function ToDoCounter() {
  return (
    <section className="counter-container">
      <h2 className="counter-title">
        You have completed <br></br>2 of 3 duties.
      </h2>
      <p className="counter-congrats">Good job !</p>
    </section>
  );
}
export { ToDoCounter };
/* Modificar que sea variable la cantidad de tareas completadas, que el good job cambie cuando llevo menos de la mitad de tareas completadas. */
