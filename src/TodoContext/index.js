import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    //const [todos, setTodos] = React.useState(defaultTodos);
    //const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo=>todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos =[];

  const filteredTodos = todos.filter(todo=> todo.text.toLowerCase()
                                              .includes(searchValue.toLowerCase()));

  if(searchValue.length>=1)
  {
    searchTodos = filteredTodos;
  }
  else
  {
    searchTodos = todos;
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este TODO?");
    if (confirmDelete) {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
    }
  };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};