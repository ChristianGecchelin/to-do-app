import { useState, useEffect } from "react";
import { AppUI } from "./AppUI";
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  /* trae por defecto lo definido en los componentes (initialValue) */
  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
    }, 1500);
  });

  /* Recordar setear en useState el nuevo array con Todos (parsedTodos) */

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("Todos_V1", []);
  /* este estado va a manejar la creacion de tareas */
  const [searchValue, setSearchValue] = useState("");
  /* este estado va a setear el valor de lo escrito en el input */

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

  useEffect(
    () => {
      console.log("use effect");
    },
    /*la segunda posicion de la funcion nos determina cuando se va a ejecutar el hook
    el array[] hace que se renderice una sola vez cuando carga la pagina
    pero tambien puedo llamar una variable para que solo se ejecute cuando hay un cambio en el estado. Eso pasaria si pongo totalTodos
    solo se ejecutaria cuando modifico el conteo de todos */
    []
  );
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
