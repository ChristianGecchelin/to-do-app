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
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter(
    (todo) => !!todo.completed.length /* !!significa es verdadero? */
  );
  const totalTodos = todos.length;
  return (
    <>
      <Header />
      <ToDoCounter />
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
