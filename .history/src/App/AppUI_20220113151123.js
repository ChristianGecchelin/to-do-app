import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoItem } from "../ToDoItem";
import { Header } from "../Header";

function AppUI() {
  return (
    <>
      <Header />
      {/* a todos les paso las props. todo lo que escribo al lado del componente son props */}
      <ToDoCounter total={totalTodos} completed={completedTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
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
