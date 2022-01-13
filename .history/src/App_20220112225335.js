import { useState } from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoItem } from "./ToDoItem";
import { Header } from "./Header";
// import './App.css';

const defaultTodos = [
  { id: 1, text: "cortar cebolla", completed: false },
  { id: 2, text: "cortar cebolla", completed: true },
  { id: 3, text: "cortar cebolla", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  /* este estado va a manejar la creacion de tareas */
  const [searchValue, setSearchValue] = useState("");
  /* este estado va a setear el valor de lo escrito en el input */
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  /* !!significa es verdadero? // filtramos el array para sacar solo los que tengan la propiedad completed en true */
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
    });
  }
  return (
    <>
      <Header />
      {/* a todos les paso las props. todo lo que escribo al lado del componente son props */}
      <ToDoCounter total={totalTodos} completed={completedTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;
