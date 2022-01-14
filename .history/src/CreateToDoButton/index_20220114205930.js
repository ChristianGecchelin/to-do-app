import "./createToDoButton.css";
function CreateToDoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    if (!openModal) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };
  const whatButton = (openModal) => {
    if (!openModal) {
      return (
        <button onClick={onClickButton} className="button-text">
          Add ToDO
        </button>
      );
    } else {
      return (
        <button onClick={onClickButton} className="button-text">
          Cerrar
        </button>
      );
    }
  };
  return (
    <div className="button-container">
      {/* <span className="button"></span> */}

      {whatButton(openModal)}
    </div>
  );
}
export { CreateToDoButton };
