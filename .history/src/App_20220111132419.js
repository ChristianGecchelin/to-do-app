// import './App.css';

const todos = [
  { text: "cortar cebolla", completed: false },
  { text: "cortar cebolla", completed: false },
  { text: "cortar cebolla", completed: false },
];

function App() {
  return (
    <>
      <ToDOCounter />
      <h2>Has completado 2 de 3 Tareas</h2>
      <ToDoSearch />
      <input placeholder="cebolla"></input>
      <ToDoList>
        {todos.map((todo) => (
          <ToDoItem />
        ))}
      </ToDoList>
      <CreateToDoButton />
      <button></button>
    </>
  );
}

export default App;
