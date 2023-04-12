import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

//import './App.css';

// const defaultTodos = [
//   {text: "Cortar cebolla", completed:true},
//   {text: "Tomar del curso de React", completed:false},
//   {text: "Llorar con la llorona", completed:false},
//   {text: "Estudiar en platzi", completed:false}
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
