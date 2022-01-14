import "./createToDoButton.css";
function CreateToDoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    if (!openModal) {
      setOpenModal = true;
    } else {
      setOpenModal = false;
    }
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
