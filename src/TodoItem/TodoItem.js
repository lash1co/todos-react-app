import React from "react";
import { TodoIcon } from "../TodoIcon";
import './TodoItem.css';

function TodoItem(props){

    return(
        <li className="TodoItem">
            {/* <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                √
            </span> */}
            <div onClick={props.onComplete}>
                <TodoIcon tipo={`Todo ${props.completed && 'completed'}`}></TodoIcon>
            </div>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            {/* <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span> */}
            <div onClick={props.onDelete}>
                <TodoIcon tipo='Delete'></TodoIcon>
            </div>
        </li>
    );
}

export {TodoItem};