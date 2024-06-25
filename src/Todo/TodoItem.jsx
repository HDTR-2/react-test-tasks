import React from 'react';

export const TodoItem = ({todo, removeTodo, toggleComplete}) => {
    return (
        <li className="Todo__item">
            <input
                className="Todo__item-checkbox"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                id={`todo-${todo.id}`}
            />
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <button className="Todo__item-button" onClick={() => removeTodo(todo.id)}>Удалить</button>
        </li>
    );
};