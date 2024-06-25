import React from 'react';
import {TodoItem} from "./TodoItem";

export const TodoList = ({todos, removeTodo, toggleComplete}) => {
    return (
        <ul className="Todo__list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}/>
            ))}
        </ul>
    );
};

