import { useState } from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoItem } from "./ToDoItem";
import { Header } from "./Header";
// import './App.css';

const todos = [
  { id: 1, text: "cortar cebolla", completed: false },
  { id: 2, text: "cortar cebolla", completed: true },
  { id: 3, text: "cortar cebolla", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
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
