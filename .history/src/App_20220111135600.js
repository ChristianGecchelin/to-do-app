import { ToDoCounter } from "./ToDoCounter";
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
      {
        //    <ToDoSearch />
      }{" "}
      <input placeholder="cebolla"></input>
      {/*    <ToDoList>
        {todos.map((todo) => (
          <ToDoItem />
        ))}
        </ToDoList>*/}
      {
        //<CreateToDoButton />
      }
      <button>+</button>
    </>
  );
}

export default App;
