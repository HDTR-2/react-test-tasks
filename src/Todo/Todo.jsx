import React, {useEffect} from 'react';
import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
import "./Todo.scss";

export const Todo = () => {
    const [todos, setTodos] = React.useState([]);


    const addTodo = (todo) => {
        if (todo.trim() !== "") {
            setTodos(prevTodos => {
                const updatedTodos = [...prevTodos, {id: prevTodos.length, text: todo, completed: false}];
                saveTodosToLocalStorage(updatedTodos);
                return updatedTodos;
            });
        }
    };
    const toggleComplete = (id) => {
        setTodos(prevTodos => {
            const newTodos = prevTodos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            );
            saveTodosToLocalStorage(newTodos);
            return newTodos;
        });
    };
    const removeTodo = (id) => {
        setTodos(prevTodos => {
            const newTodos = prevTodos.filter(todo => todo.id !== id);
            saveTodosToLocalStorage(newTodos);
            return newTodos;
        });
    };


    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const saveTodosToLocalStorage = (todosToSave) => {
        localStorage.setItem("todos", JSON.stringify(todosToSave));
    };

    return (
        <div className="Todo">
            <div className="Todo__container">
                <h2>Список Задач</h2>
                <TodoInput addTodo={addTodo}/>
                <TodoList
                    todos={todos}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}/>
            </div>
        </div>
    );
};
