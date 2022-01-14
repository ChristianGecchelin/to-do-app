import "./createToDoButton.css";
function CreateToDoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {( openModal === true ? setOpenModal === false : setOpenModal === true;)
   
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
