import React from "react";
function useLocalStorage(itemName, initialValue) {
  /* este estado se usa con try/catch para determinar si ha habido un error lo capturo seteandolo */
  const [error, setError] = React.useState(false);
  /* este usestate setea el estado en el que se encuentra el pedido.Mientras este cargando va a ser true, una vez que termine de cargar va a ser false*/
  const [loading, setLoading] = React.useState(true);

  /* Recordar setear en useState el nuevo array con Todos (parsedTodos(antes) ahora lo cambie por initialValue *ver comentario abajo) */
  const [item, setItem] = React.useState(initialValue);
  /* trae por defecto lo definido en los componentes osea algo vacio en este caso. Pero luego ejecuto el useEffect para que cargue con delay lo del localStorage, simulando el pedido a una API (initialValue) */

  React.useEffect(
    () => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }

          /* seteamos el estado para mostrar lo que tenemos en localStorage */
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1250);
    }
    /*  
      la segunda posicion de la funcion nos determina cuando se va a ejecutar el hook
      el array[] hace que se renderice una sola vez cuando carga la pagina
      pero tambien puedo llamar una variable para que solo se ejecute cuando hay un cambio en el estado. Eso pasaria si pongo totalTodos
      solo se ejecutaria cuando modifico el conteo de todos */
  );

  const saveItem = (newItem) => {
    /* seteo con un try catch porque es posible que al crear un nuevo todo me de error */
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading, error };
}
export { useLocalStorage };
