import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../TodoItem/TodoItem";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";

import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI(){
    const {
        loading,
        error,
        totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
} = React.useContext(TodoContext);
    return(
        <React.Fragment>
            <TodoCounter
            // total={totalTodos}
            // completed={completedTodos}
            />
            <TodoSearch
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
            />
      
            <TodoList>
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading />}
            {(!loading && !searchTodos.length) && <EmptyTodos />}
    
            {searchTodos.map(todo=>(
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
              />
            ))}
            </TodoList>
            {openModal && (
              <Modal>
                <TodoForm></TodoForm>
              </Modal>
            )}
            <CreateTodoButton
              openModal = {openModal}
              setOpenModal = {setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI};