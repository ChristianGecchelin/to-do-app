import "./createToDoButton.css";
function CreateToDoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    props.openModal === true
      ? props.setOpenModal === false
      : props.setOpenModal === true;
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
