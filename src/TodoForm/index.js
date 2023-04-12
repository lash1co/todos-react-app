import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo, openModal, setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = ()=>{
        setOpenModal(!openModal);
        setNewTodoValue('');
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(!openModal);
        setNewTodoValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newTodoValue}
                placeholder="Coloca la tarea a realizar"
                onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                >
                Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                Guardar</button>
            </div>
        </form>
    );
}

export {TodoForm};