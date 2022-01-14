import { useState, useEffect } from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue) {
  /* este estado se usa con try/catch para determinar si ha habido un error lo capturo seteandolo */
  const [error, setError] = useState(false);
  /* este usestate setea el estado en el que se encuentra el pedido.Mientras este cargando va a ser true, una vez que termine de cargar va a ser false*/
  const [loading, setLoading] = useState(true);

  /* Recordar setear en useState el nuevo array con Todos (parsedTodos(antes) ahora lo cambie por initialValue *ver comentario abajo) */
  const [item, setItem] = useState(initialValue);
  /* trae por defecto lo definido en los componentes osea algo vacio en este caso. Pero luego ejecuto el useEffect para que cargue con delay lo del localStorage, simulando el pedido a una API (initialValue) */

  useEffect(
    () => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }

          /* seteamos el estado para mostrar lo que tenemos en localStorage */
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1250);
    } /*  
    la segunda posicion de la funcion nos determina cuando se va a ejecutar el hook
    el array[] hace que se renderice una sola vez cuando carga la pagina
    pero tambien puedo llamar una variable para que solo se ejecute cuando hay un cambio en el estado. Eso pasaria si pongo totalTodos
    solo se ejecutaria cuando modifico el conteo de todos */
  );

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading };
}

function App() {
  const {
    /* Antes solo traia Todo y saveTodo. Ahora, lo converti en un objeto para traer a loading tambien, y renombre las variables que retorne del customHook para que coincidan con la nomenclatura de lo descripto en APP */
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage("Todos_V1", []);
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

  return (
    <AppUI
      error={error}
      loading={loading}
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
