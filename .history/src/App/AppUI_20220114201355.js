import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoItem } from "../ToDoItem";
import { Header } from "../Header";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import "./AppUI.css";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <Header />
      {/* a todos les paso las props. todo lo que escribo al lado del componente son props */}
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {/* declaro tres variables, que luego van a presentar tres situaciones distintas.
        la tercera significa, si loading es false(ya cargó) y el array es vacio muestro ese mensaje */}
        {error && (
          <p className="alternative-text">Hubo un error en la carga...</p>
        )}
        {loading && <p className="alternative-text">Cargando...</p>}
        {!loading && !searchedTodos.length && (
          <p className="alternative-text">Crea tu primer ToDo</p>
        )}

        {searchedTodos.map((todo) => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ToDoList>
      {openModal && (
        <Modal>
          <p>Holis</p>
        </Modal>
      )}

      <CreateToDoButton setOpenModal={setOpenModal} />
    </>
  );
}
export { AppUI };
