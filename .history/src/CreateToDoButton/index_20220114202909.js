import "./createToDoButton.css";
function CreateToDoButton(props) {
  const onClickButton = () => {
    props.OpenModal === true
      ? props.setOpenModal === false
      : props.setOpenModal === true;
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
