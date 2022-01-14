import "./createToDoButton.css";
function CreateToDoButton() {
  const onClickButton = (props) => {
    props.setOpenModal(true);
  };
  return (
    <div className="button-container">
      {/* <span className="button"></span> */}
      <button onClick={onClickButton} className="button-text">
        Añadir Tarea
      </button>
    </div>
  );
}
export { CreateToDoButton };
