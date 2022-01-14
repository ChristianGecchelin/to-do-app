import "./createToDoButton.css";
function CreateToDoButton() {
  return (
    <button className="button-container">
      <span className="button"></span>
      <p className="button-text">Añadir Tarea</p>
    </button>
  );
}
export { CreateToDoButton };
