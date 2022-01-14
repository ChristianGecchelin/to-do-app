import "./createToDoButton.css";
function CreateToDoButton() {
  const onClickButton = () => {
    setOpenModal(true);
  };
  return (
    <button className="button-container" onClick={onClickButton}>
      {/* <span className="button"></span> */}
      <p className="button-text">Añadir Tarea</p>
    </button>
  );
}
export { CreateToDoButton };
