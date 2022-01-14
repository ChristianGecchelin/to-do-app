import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoItem } from "../ToDoItem";
import { Header } from "../Header";

function AppUI({}) {
  return (
    <>
      <Header />
      {/* a todos les paso las props. todo lo que escribo al lado del componente son props */}
      <ToDoCounter total={totalTodos} completed={completedTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {/* declaro tres variables, que luego van a presentar tres situaciones distintas.
        la tercera significa, si loading es false(ya cargó) y el array es vacio muestro ese mensaje */}
        {error && <p>Hubo un error en la carga...</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer ToDo</p>}

        {searchedTodos.map((todo) => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}
export { AppUI };
