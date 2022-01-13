import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoItem } from "./ToDoItem";
// import './App.css';

const todos = [
  { text: "cortar cebolla", completed: false },
  { text: "cortar cebolla", completed: false },
  { text: "cortar cebolla", completed: false },
];

function App() {
  return (
    <>
      <ToDoCounter />
      {<ToDoSearch />}
      <ToDoList>
        {todos.map((todo) => (
          <ToDoItem key={todo.text} text={todo.text} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
