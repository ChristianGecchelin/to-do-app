import React from 'react'
const {TodoContext} = createContext()
function TodoProvider(props){return(
    <TodoContext.Provider></TodoContext.Provider>
    <TodoContext.Consumer></TodoContext.Consumer>)}