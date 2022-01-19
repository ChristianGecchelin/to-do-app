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
import { TodoForm } from "../TodoForm";
import { TitleToDo } from "../TitleToDo";

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
      <section className="container-header">
        <Header />

        <ToDoSearch />
      </section>

      {/* a todos les paso las props. todo lo que escribo al lado del componente son props */}
      <section className="main-container">
        <ToDoCounter />
        <section className="view-todo-container">
          <TitleToDo />
          <CreateToDoButton setOpenModal={setOpenModal} openModal={openModal} />
          <ToDoList>
            {/* declaro tres variables, que luego van a presentar tres situaciones distintas.
        la tercera significa, si loading es false(ya cargó) y el array es vacio muestro ese mensaje */}
            {error && (
              <li>
                <p className="alternative-text">Ups something happen...</p>
              </li>
            )}
            {loading && (
              <li>
                <p className="alternative-text">Loading...</p>
              </li>
            )}
            {!loading && !searchedTodos.length && (
              <li>
                <p className="alternative-text">Write a ToDo</p>
              </li>
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
        </section>
      </section>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}
export { AppUI };
