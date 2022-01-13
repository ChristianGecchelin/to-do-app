import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoItem } from "./ToDoItem";
import { Header } from "./Header";
// import './App.css';

const todos = [
  { text: "cortar cebolla", completed: false },
  { text: "cortar cebolla", completed: true },
  { text: "cortar cebolla", completed: false },
];

function App() {
  return (
    <>
      <Header />
      <ToDoCounter />
      {<ToDoSearch />}
      <ToDoList>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>
    </>
  );
}

export default App;
