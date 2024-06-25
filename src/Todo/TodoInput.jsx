import React from 'react';

export const TodoInput = ({addTodo}) => {
    const [value, setValue] = React.useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="Todo__form">
            <input type="text"
                   className="Todo__input"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="button">Добавить Задачу</button>
        </form>
    );
};

