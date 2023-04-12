import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        // <h1 style={estilos}>Has completado 2 de 3 tareas</h1>
        //<h1 className="TodoCounter">Has completado {props.completed} de {props.total} tareas</h1>
        <h1 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h1>
    );
}

export {TodoCounter};