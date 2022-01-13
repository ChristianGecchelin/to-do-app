// import './App.css';

function App() {
  return (
    <>
      <ToDOCounter />
      <h2>Has completado 2 de 3 Tareas</h2>
      <ToDoSearch />
      <input placeholder="cebolla"></input>
      <ToDoList>
        <ToDoItem />
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;
