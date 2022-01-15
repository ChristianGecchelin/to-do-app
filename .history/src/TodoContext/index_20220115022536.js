import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();
function TodoProvider(props) {
  const {
    /* Antes solo traia Todo y saveTodo. Ahora, lo converti en un objeto para traer a loading tambien, y renombre las variables que retorne del customHook para que coincidan con la nomenclatura de lo descripto en APP */
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("Todos_V1", []);
  /* este estado va a manejar la creacion de tareas */
  const [searchValue, setSearchValue] = React.useState("");
  /* este estado va a setear el valor de lo escrito en el input */

  const [openModal, setOpenModal] = React.useState(false);

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed === false) {
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    } else {
      newTodos[todoIndex].completed = false;
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  /* !!significa es verdadero? // filtramos el array para sacar solo los que tengan la propiedad completed en true */
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.trim().toLowerCase();
      const searchText = searchValue.trim().toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        saveTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
